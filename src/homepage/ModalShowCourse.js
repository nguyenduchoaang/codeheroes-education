import React, { useState } from "react";
import styled from "styled-components";
const ModalShowCourse = ({ isOpen, onClose, onSave }) => {
  return (
    <ModalShowCourseWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalShowCourseInner>ModalShowCourse</ModalShowCourseInner>
    </ModalShowCourseWrapper>
  );
};

const ModalShowCourseWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  position: absolute;
`;

const ModalShowCourseInner = styled.div``;
export default ModalShowCourse;
