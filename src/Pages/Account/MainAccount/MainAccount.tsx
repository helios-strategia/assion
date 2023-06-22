import React, {FC, useEffect, useState} from "react";
import { MainAccountProps } from ".";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Popconfirm,
  Row,
  Space,
  Typography,
  theme, message, Upload,
} from "antd";
import {LoadingOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import {Role, RoleEncode, RoleEncodeUA, User} from "../../../types/user";
import {useAuth} from "../../../hooks/useAuth";
import {useAllUsers} from "../../Users/api.users";
import {RcFile, UploadChangeParam, UploadFile, UploadProps} from "antd/es/upload";

export const MainAccount: FC<MainAccountProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const {auth: info} = useAuth()
  const { fetchEditUser } = useAllUsers();

  const [userForm, setUserForm] = useState<{[key:string]:string}>({name:"",phone:"", email:''})


  const [file64, setFile64] = useState<string>("");
  const [avatarFile, setAvatarFile] = useState<any>();
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    const {name, id, phone, email, avatarUrl} = info.info

    setUserForm({name, id, phone, email, avatarUrl})
  },[])

  const handleChange: UploadProps["onChange"] = (
      info: UploadChangeParam<UploadFile>
  ) => {
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setAvatarFile(info.file.originFileObj ?? null);
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setFile64(url);
      });
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const customRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  async function onFinishUser() {

      const data = new FormData();

      Object.entries(userForm).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (avatarFile) {
        data.append("avatar", avatarFile);
      }

      const res = await fetchEditUser(data, userForm.id);

  }



  function userFormHandler(event:React.ChangeEvent<HTMLInputElement>){

    const key = event.target.name
    const value = event.target.value

    setUserForm((prev)=> ({...prev,[key]:value}))
  }


  const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Додати Аватар</div>
      </div>
  );
  return (
    <div>
      <Row gutter={[40, 40]}>
        <Col xs={24} md={24} xl={9}>
          <Card>
            <Row gutter={[20,20]}>
             <Col  xs={24}  lg={8}>
               <Upload
                   listType="picture-circle"
                   className="avatar-uploader"
                   showUploadList={false}
                   customRequest={customRequest}
                   beforeUpload={beforeUpload}
                   onChange={handleChange}
               >
                 {file64 || userForm.avatarUrl ? (
                     <Avatar
                         size={100}
                         src={
                           file64
                               ? file64
                               : userForm.avatarUrl
                                   ? `http://${userForm.avatarUrl}`
                                   : undefined
                         }
                         alt="avatar"
                     />
                 ) : (
                     uploadButton
                 )}
               </Upload>
             </Col>
         <Col xs={24} lg={14}>
           <Space direction="vertical">
             <Typography.Paragraph strong style={{ fontSize: "1.3rem" }}>
               {info.info.name}
             </Typography.Paragraph>
             <Typography.Paragraph>Роль:</Typography.Paragraph>
             <Typography.Paragraph>{RoleEncodeUA[info.info.role]}</Typography.Paragraph>
           </Space>
         </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={8} xl={5}>
          <Typography.Paragraph>Телефон</Typography.Paragraph>
          <Input name={"phone"} onChange={userFormHandler} value={userForm.phone} />
        </Col>
        <Col xs={24} md={8} xl={5}>
          <Typography.Paragraph>Email</Typography.Paragraph>
          <Input name={'email'} onChange={userFormHandler} value={userForm.email} />
        </Col>
        <Col xs={24} md={8} xl={5}>
          <Typography.Paragraph>Імʼя</Typography.Paragraph>
          <Input name={"name"} onChange={userFormHandler} value={userForm.name} />
        </Col>
      </Row>
      <Row justify="end">
        <Col>
          <Popconfirm onConfirm={onFinishUser} title="Ви впевнені що хочете внести зміни ?">
            <Button style={{marginTop:20}} type="primary">Застосувати зміни</Button>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};
