import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-red-900 font-rubik-bold  text-3xl">Hari Om Bapu</Text>

      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/10">Property 1</Link>
    </View>
  );
}
