import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
const SignIn = () => {
  const handleLogin = () => {};
  return (
    // enables the content to be inset from the edges of the screen
    <SafeAreaView className="bg-white">
      {/* enables the content to be scrollable even if the height of the device is less than the content it adds a scroll bar */}
      <ScrollView contentContainerClassName="h-full">
        {/* sets the image to be the same size as the screen with the props as resizeMode which sets the image to fit the screen */}
        {/* resizeMode is equivalent to the object-fit */}
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to the ReactEstate!
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-200 text-center mt-2">
            Let's get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReactEstate with Google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-4"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              ></Image>
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue to Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
