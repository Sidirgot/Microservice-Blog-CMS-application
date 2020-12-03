import React from "react";
import { BtnPrimary, BtnSymbol, NoBG } from "#root/styles/shared/buttons";

export const NewEntryBtn = () => {
  return (
    <BtnPrimary>
      New Post <BtnSymbol>&#43;</BtnSymbol>
    </BtnPrimary>
  );
};

export const BackBtn = () => {
  return (
    <BtnPrimary>
      <BtnSymbol>&#9166;</BtnSymbol> Back
    </BtnPrimary>
  );
};

export const ShowBtn = () => {
  return <NoBG type="show">&#128065;</NoBG>;
};

export const EditBtn = () => {
  return <NoBG type="edit">&#9998;</NoBG>;
};

export const DeleteBtn = () => {
  return <NoBG type="delete">&#128465;</NoBG>;
};
