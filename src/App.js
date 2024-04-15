import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
// import { generateClient } from "aws-amplify/api";
// import { uploadData, getUrl, remove } from 'aws-amplify/storage';
// import { Storage } from 'aws-amplify';
import {
  Button,
  // Flex,
  // Image,
  Heading,
  // Text,
  // TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
// import { listNotes } from "./graphql/queries";
// import {
// createNote as createNoteMutation,
// deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";

import { NavBarHeader } from './ui-components';

const App = ({ signOut }) => {

  return (
    <View className="App">
      <Heading level={1}>My Gym App</Heading>
      <NavBarHeader />
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);