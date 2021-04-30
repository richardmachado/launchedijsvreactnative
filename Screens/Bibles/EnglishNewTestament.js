import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import _ from "lodash";
import DropDownPicker from "react-native-dropdown-picker";
import { newtestamentbooks } from "./books/bible_books_newtestament";

import { styles } from "./styles/bibleStyles";



function EnglishNewTestament() {
  const [forms, setForms] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("MATTHEW");
  const [numberChapters, setNumberChapters] = useState([]);

  const mapNewEnglishChapters = _.range(1, numberChapters + 1).map(
    (option) => ({
      label: `${option}`,
      value: `${option}`,
    })
  );

  const mapNewEnglishBooks = newtestamentbooks.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  const handleChange = (event) => {
    setChapter(event);
  };

  const handleSubmit = (e) => {
    setBook(e);
  };

  const options = {
    headers: {
      "x-rapidapi-key": KEY,
      "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
      useQueryString: "true",
    },
  };

  function processData() {
    return forms[0].Output.split(/\s+(?=\d)/g);
  }

  useEffect(() => {
    axios
      .get(
        `https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`,
        options
      )
      .then((response) => {
        setForms([response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
    newtestamentbooks.map((item) => {
      if (item.value === book) {
        return setNumberChapters(item.chapters);
      }
    });
    // eslint-disable-next-line
  }, [book, chapter]);
  if (!forms) {
    return <h1>Loading...</h1>;
  }
  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View style={styles.info}>
          <Text key={book}>
            {book} {chapter}
          </Text>
        </View>
        <View style={styles.pickers}>
          <DropDownPicker
            items={mapNewEnglishBooks}
            defaultIndex={0}
            placeholder="Book"
            dropDownStyle={{ marginTop: 2, backgroundColor: "skyblue" }}
            containerStyle={{ height: 40, width: 170, height: 70 }}
            onChangeItem={(item) => handleSubmit(item.value)}
          />

          <DropDownPicker
            items={mapNewEnglishChapters}
            style={{ paddingVertical: 10 }}
            defaultIndex={0}
            placeholder="Chapter"
            dropDownStyle={{ marginTop: 2, backgroundColor: "skyblue" }}
            containerStyle={{ height: 40, width: 120, height: 70 }}
            onChangeItem={(item) => handleChange(item.value)}
          />
        </View>
        {forms.map((chapterinfo) => {
          return (
            <View key={chapterinfo}>
              {processData().map((data2) => (
                <>
                  <Text key={data2}>{data2}</Text>
                </>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default EnglishNewTestament;
