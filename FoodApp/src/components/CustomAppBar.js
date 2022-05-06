import { View, Text, Pressable, Image } from "react-native";
import { fakeDataAPI, SIZES } from "../constants";

const CustomAppBar = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{title}</Text>
      </View>
      <Pressable
        style={(pressed) => [
          { opacity: pressed ? 0.5 : 1 },
          {
            marginRight: SIZES.margin * 2,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Image
          source={fakeDataAPI?.myProfile.profile_image}
          style={{
            width: 35,
            height: 35,
            borderRadius: "50%",
          }}
        />
      </Pressable>
    </View>
  );
};

export default CustomAppBar;
