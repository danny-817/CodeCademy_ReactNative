import React, { useState } from "react";
import { View,ScrollView, Text, TextInput } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [petName, setPetName] = useState("");
  const [petDob, setPetDob] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");

  return (
    <ScrollView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ecf0f1", padding:16 }}
    >
      <CustomInput
        label="email"
        placeholder="enter email here"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Password"
        placeholder="enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
      style={{backgroundColor:confirmPassword===password?"white":"red"}}
        label="Confim Password"
        placeholder="Please re-enter your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomInput
        label="Pet's Name"
        placeholder="Enter your pets name"
        value={petName}
        onChangeText={setPetName}
      />
      <CustomInput
        label="Pets DOB"
        placeholder="Enter your pets DOB"
        value={petDob}
        onChangeText={setPetDob}
      />
      <CustomInput
        label="Breed"
        placeholder="Enter your pets breed"
        value={breed}
        onChangeText={setBreed}
      />
      <CustomInput
        label="Favourite Toy"
        placeholder="Enter your pets favourite toy"
        value={toy}
        onChangeText={setToy}

      />
    </ScrollView>
  );
};

export default App;

const CustomInput = (props) => {
  return (
    <View>
      <Text style={{padding:8, fontSize:18}}>{props.label}</Text>
      <TextInput
      style={[props.style,{padding:8, fontSize:18}]}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
