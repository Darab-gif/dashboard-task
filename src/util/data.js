import { nanoid } from "@reduxjs/toolkit";
import {
  Customer,
  Dashboard,
  Dot,
  Page,
  Product,
  Setting,
  Download,
  Support,
  user2,
  user1,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  Edit,
} from "../components";

export const data = [
  {
    icon: <Dashboard />,
    name: "Dashboard",
  },
  {
    icon: <Page />,
    name: "Pages",
  },
  {
    icon: <Customer />,
    name: "Customer",
  },
  {
    icon: <Product />,
    name: "Products",
  },
  {
    icon: <Support />,
    name: "Support",
  },
  {
    icon: <Setting />,
    name: "Setting",
  },
];

export const customer = [
  {
    name: "Sam Dav",
    date: "30th December, 2022",
    time: "2:00 PM",
    email: "sam@gmail.com",
    icon: <Dot size={20} />,
  },
];

export const product = [
  {
    name: "Sam Dav",
    date: "30th December, 2022",
    product: "ABC",
    icon: (
      <div className="flex border-[2px] items-center justify-center border-light gap-2 w-[80px] h-[35px]">
        <span>
          <Download size={20} />
        </span>
        <span>
          <Edit size={20} />
        </span>
      </div>
    ),
  },
];

export const user = [
  {
    id: nanoid(),
    image: <img src={user1} alt="user" />,
    name: "Kriston Waston",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user2} alt="user" />,
    name: "Wadden Warren",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user3} alt="user" />,
    name: "Arlene McCoy",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user4} alt="user" />,
    name: "Courtney Henry",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user5} alt="user" />,
    name: "Annette Black",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user6} alt="user" />,
    name: "Annette Black",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user7} alt="user" />,
    name: "Annette Black",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user8} alt="user" />,
    name: "Annette Black",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user8} alt="user" />,
    name: "Annette Black",
    info: "Lorem ipsum dolor sit.",
  },
  {
    id: nanoid(),
    image: <img src={user8} alt="user" />,
    name: "Annette Black",
    info: "Lorem ipsum dolor sit.",
  },
];

export const role = [
  {
    id: nanoid(),
    name: "Abc",
    role: "Admin",
    login: "Yesterday",
  },
];
