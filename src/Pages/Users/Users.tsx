import { FC, useState } from "react";
import { UsersProps } from ".";
import {
  Avatar,
  Button,
  Input,
  Segmented,
  Space,
  Table,
  Typography,
  theme,
} from "antd";
import { Role, RoleEncode, RoleEncodeUA, User } from "../../types/user";
import { ColumnsType } from "antd/es/table";
import { EditFilled, UserOutlined, PlusOutlined } from "@ant-design/icons";
import { CreateUser } from "../../Components/CreateUser";
import { UpdateUser } from "../../Components/UpdateUser";

const moc: User[] = [
  {
    id: 1,
    version: 0,
    name: "Валерий Жмишенко",
    role: "ADMIN",
    email: "valera@helios.com",
    avatar: "",
    phone: "+38011111111",
  },
  {
    id: 2,
    version: 0,
    name: "Вася Пупкин",
    role: "CLIENT",
    email: "vasya228@helios.com",
    avatar: "",
    phone: "+38011111111",
  },
  {
    id: 3,
    version: 0,
    name: "Иваи Иванов",
    role: "ADMIN",
    email: "ivanivan@helios.com",
    avatar: "",
    phone: "+38011111111",
  },
  {
    id: 4,
    version: 0,
    name: "Захар Петров",
    role: "CLIENT",
    email: "zahar@helios.com",
    avatar: "",
    phone: "+38011111111",
  },
  {
    id: 5,
    version: 0,
    name: "Дмитрий Левандовский",
    role: "CLIENT",
    email: "levandovskiy@helios.com",
    avatar: "",
    phone: "+38011111111",
  },
];

const showTypes = [
  { label: "Усі", value: "ALL" },
  { label: "Адміністратори", value: "ADMIN" },
  { label: "Клієнти", value: "CLIENT" },
];

type showTypesType = string; //"CLIENT" | "ADMIN" | "ALL";

export const Users: FC<UsersProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const [users, setUsers] = useState<User[]>(moc);
  const [showType, seShowType] = useState<showTypesType>("ALL");
  const [inputFilter, setInputFilter] = useState<string>("");
  const [openModalCreateUser, setOpenModalCreateUser] =
    useState<boolean>(false);
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState<User | null>(
    null
  );

  function showModalCreateUser() {
    setOpenModalCreateUser(true);
  }
  function hideModalCreateUser() {
    setOpenModalCreateUser(false);
  }
  function showModalUpdateUser(data: User) {
    setOpenModalUpdateUser(data);
  }
  function hideModalUpdateUser() {
    setOpenModalUpdateUser(null);
  }

  function inputFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInputFilter(event.target.value);
  }

  function filterUsers(): User[] {
    return users
      .filter((user) => {
        return (
          RegExp(inputFilter).test(user.phone.toLowerCase()) ||
          RegExp(inputFilter).test(user.name.toLowerCase())
        );
      })
      .filter((user) => {
        if (showType === "ALL") {
          return true;
        } else {
          return user.role === showType;
        }
      });
  }

  const columns: ColumnsType<User> = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      width: 35,
      align: "center",
      render() {
        return (
          <Avatar
            size={40}
            style={{ backgroundColor: colorPrimary }}
            icon={<UserOutlined />}
          />
        );
      },
    },
    {
      title: "ПІБ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Роль",
      dataIndex: "role",
      key: "role",
      render(value) {
        return <Typography.Text>{RoleEncodeUA[value]}</Typography.Text>;
      },
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: 100,
      align: "center",
      render(text, data) {
        return (
          <Button type="primary" onClick={() => showModalUpdateUser(data)}>
            <EditFilled />
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Segmented
          value={showType}
          options={showTypes}
          onChange={(value) => seShowType(value.toString())}
        />
        <Button
          onClick={showModalCreateUser}
          icon={<PlusOutlined />}
          type="primary"
        >
          Додати користувача
        </Button>
      </div>
      <Input size="large" onChange={inputFilterHandler} />
      <Table dataSource={filterUsers()} columns={columns} pagination={false} />
      <CreateUser open={openModalCreateUser} hideModal={hideModalCreateUser} />
      <UpdateUser open={openModalUpdateUser} hideModal={hideModalUpdateUser} />
    </div>
  );
};
