export const GET_QUESTIONS = "GET_QUESTIONS";
export const SEARCH_QUESTIONS = "SEARCH_QUESTIONS";
export const CHANGE_KATEGORY = "CHANGE_KATEGORY";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIES_PAGE = "PREVIES_PAGE";
export const GO_TO_QUESTION_NR = "GO_TO_QUESTION_NR";
export const CHANGE_PER_PAGE = "CHANGE_PER_PAGE";

const firebase = require("firebase");

export const getQuestions = (kat, lang) => {
  const name = `kat_${kat}_${lang}`;
  if (sessionStorage.getItem(name)) {
    // console.log("pobrano z sessionStorage");
    // retriev questions from sessionStorage
    return dispatch => {
      dispatch({
        type: GET_QUESTIONS,
        allQuestions: JSON.parse(sessionStorage.getItem(name))
      });
    };
  } else {
    // console.log("pobrano z firebase", sessionStorage.getItem(name));
    // retriev questions from firebase
    return dispatch => {
      firebase
        .firestore()
        .collection("questions")
        .doc(name)
        .get()
        .then(doc => {
          if (doc.exists) {
            const data = doc.data();
            let allQuestions = data.allQuestions.map((item, i) => {
              let newItem = item;
              newItem.nr = i + 1;
              newItem.m = newItem.m === "" ? "empty.jpg" : newItem.m;
              newItem.v = item.m.indexOf(".mp4") > 0 ? true : false;
              return newItem;
            });
            sessionStorage.setItem(name, JSON.stringify(allQuestions));
            dispatch({
              type: GET_QUESTIONS,
              allQuestions
            });
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    };
  }
};

export const changeKategory = kat => {
  return {
    type: CHANGE_KATEGORY,
    kat
  };
};

export const searchQuestions = search => {
  return {
    type: SEARCH_QUESTIONS,
    search
  };
};

export const changePerPage = perPage => {
  return {
    type: CHANGE_PER_PAGE,
    perPage: parseInt(perPage)
  };
};

export const goToQuestionNr = nr => {
  return { type: GO_TO_QUESTION_NR, nr: parseInt(nr) };
};

export const nextPage = () => {
  return { type: NEXT_PAGE };
};

export const previesPage = () => {
  return { type: PREVIES_PAGE };
};
