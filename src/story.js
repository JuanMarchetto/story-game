export const story = {
  title: "Example Story",
  text: "Text of the story",
  options: [
    {
      title: "option 1",
      img: "url",
      text: "text to show when this option is selected",
      endImg: "url for this option when selected(only for ends)",
    },
    {
      title: "option 2",
      img: "url",
      text: "text for option 2",
      options: [
        {
          title:
            "Nested option (can go deep as you want in the tree off options",
          img: "url",
          text: "text for this option",
          endImg: "irl",
        },
      ],
    },
  ],
};
