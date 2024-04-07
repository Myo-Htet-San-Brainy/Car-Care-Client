import { v4 as uuidv4 } from "uuid";
import sugImage from "./assets/sugImage.jpg";
import sugImage1 from "./assets/sugImage1.jpg";
import sugImage2 from "./assets/sugImage2.jpg";
import sugImage3 from "./assets/sugImage3.jpg";

export const apiReply = {
  session_id: "blar-blar-blar",
  reply: [
    {
      id: uuidv4(),
      type: "header",
      content: "the text to show on screen",
    },
    {
      id: uuidv4(),

      type: "paragraph",
      content: "the text to show on screen",
    },
    {
      id: uuidv4(),

      type: "bullet",
      content: ["list item 1", "list item 2"],
    },
    {
      id: uuidv4(),

      type: "numbered list",
      content: ["list item 1", "list item 2"],
    },
    {
      id: uuidv4(),
      type: "suggestion",
      "sub-type": "image-and-text",
      content: {
        image: sugImage,
        header: "header",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro autem deleniti vitae distinctio soluta possimus sed saepe voluptates inventore?",
      },
    },
    {
      id: uuidv4(),
      type: "suggestion",
      "sub-type": "3-image",
      content: {
        images: [sugImage1, sugImage2, sugImage3],
        header: "header",
      },
    },
  ],
};

export const suggestions = [
  {
    id: uuidv4(),
    type: "suggestion",
    "sub-type": "image-and-text",
    content: {
      image: sugImage,
      header: "header",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro autem deleniti vitae distinctio soluta possimus sed saepe voluptates inventore?",
    },
  },
  {
    id: uuidv4(),
    type: "suggestion",
    "sub-type": "image-and-text",
    content: {
      image: sugImage,
      header: "header",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit voluptate dolorem aut assumenda culpa, sapiente eaque! Nihil placeat voluptatibus molestias ",
    },
  },
  {
    id: uuidv4(),
    type: "suggestion",
    "sub-type": "3-image",
    content: {
      images: [sugImage1, sugImage2, sugImage3],
      header: "header",
    },
  },
];

export const navLinks = [
  {
    id: uuidv4(),
    displayText: "Home",
    to: "/",
  },
  {
    id: uuidv4(),
    displayText: "Search",
    to: "/search",
  },
  {
    id: uuidv4(),
    displayText: "Accessories",
    to: "/accessories",
  },
  {
    id: uuidv4(),
    displayText: "Notifications",
    to: "/notifications",
  },
  {
    id: uuidv4(),
    displayText: "Account",
    to: "/account",
  },
];
