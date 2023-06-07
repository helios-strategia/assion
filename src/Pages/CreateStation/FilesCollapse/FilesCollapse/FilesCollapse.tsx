import { FC, useState } from "react";
import { FilesCollapseProps } from ".";
import { Card, Col, Collapse, Row, theme } from "antd";
import { fileItem } from "../../CreateStation";
import { PlusCircleFilled } from "@ant-design/icons";
import { FileItem } from "../../FileItem/FileItem";

export const FilesCollapse: FC<FilesCollapseProps> = ({
  files,
  filesHandler,
  title,
}) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  function fileNameHanler(name: string, index: number) {
    filesHandler((prev: fileItem[]) => {
      const newState = prev.concat();
      newState[index].name = name;

      return newState;
    });
  }
  function fileHandler(file: any, index: number) {
    filesHandler((prev: fileItem[]) => {
      const newState = prev.concat();
      newState[index].file = file;

      return newState;
    });
  }

  function addFile() {
    filesHandler((prev: fileItem[]) =>
      prev.concat({ name: "", file: undefined })
    );
  }

  return (
    <Collapse>
      <Collapse.Panel header={title} key="1">
        <Row gutter={[20, 20]}>
          {files.map((module, index) => {
            return (
              <FileItem
                key={index}
                index={index}
                fileHandler={fileHandler}
                fileNameHanler={fileNameHanler}
                module={module}
              />
            );
          })}

          <Col xs={8}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={addFile}
            >
              <PlusCircleFilled
                style={{
                  color: colorPrimary,
                  fontSize: 30,
                }}
              />
            </Card>
          </Col>
        </Row>
      </Collapse.Panel>
    </Collapse>
  );
};
