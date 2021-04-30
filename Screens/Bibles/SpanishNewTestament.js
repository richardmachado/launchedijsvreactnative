import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import DropDownPicker from "react-native-dropdown-picker";

import { ScrollView, View, Text } from "react-native";

import { spanish_books_new_testament } from "./books/bible_books_spanish_new_testament";

import { styles } from "./styles/bibleStyles";



export default function SpanishNewTestament() {
  const [numberChapters, setNumberChapters] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("MAT");
  const [forms, setForms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const mapNewSpanishChapters = _.range(1, numberChapters + 1).map(
    (option) => ({
      label: `${option}`,
      value: `${option}`,
    })
  );

  const mapNewSpanishBooks = spanish_books_new_testament.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  function stripHTML(text) {
    return text.replace(/<.*?>/gm, " ");
  }

  const handleChange = (event) => {
    setChapter(event);
  };

  const handleSubmit = (e) => {
    setBook(e);
  };
  const options = {
    headers: {
      "Api-key": KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/${book}.${chapter}?`,
        options
      )
      .then((response) => {
        setForms([response.data.data]);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
    spanish_books_new_testament.map((item) => {
      if (item.value === book) {
        return setNumberChapters(item.chapters);
      }
    });
    // eslint-disable-next-line
  }, [chapter, book]);

  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View style={styles.info}>
          <Text>
            {book} {chapter}
          </Text>
        </View>
        <View style={styles.pickers}>
          <DropDownPicker
            items={mapNewSpanishBooks}
            placeholder="Libro"
            defaultIndex={0}
            dropDownStyle={{ marginTop: 2, backgroundColor: "skyblue" }}
            containerStyle={{ height: 40, width: 180, height: 70 }}
            onChangeItem={(item) => handleSubmit(item.value)}
          />

          <DropDownPicker
            items={mapNewSpanishChapters}
            defaultIndex={0}
            placeholder="Capitulo"
            dropDownStyle={{ marginTop: 2, backgroundColor: "skyblue" }}
            containerStyle={{ height: 40, width: 110, height: 70 }}
            onChangeItem={(item) => handleChange(item.value)}
          />
        </View>

        {forms.map((chapterinfo) => {
          return (
            <View key={chapterinfo}>
              <Text>{stripHTML(chapterinfo.content)}</Text>
              {isLoading ? !forms : <Text>Loading...</Text>}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
