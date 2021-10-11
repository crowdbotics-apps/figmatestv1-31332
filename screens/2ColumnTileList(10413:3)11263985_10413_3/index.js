import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10413_4}>
        <View style={styles.View_10413_5}>
          <Text style={styles.Text_10413_5}>Latino</Text>
        </View>
        <View style={styles.View_10413_6} />
        <View style={styles.View_10413_7}>
          <Text style={styles.Text_10413_7}>BARCELONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/6422/148a62d040106614890cb88c8f5708c0"
          }}
          style={styles.ImageBackground_10413_8}
        />
        <View style={styles.View_10413_9}>
          <Text style={styles.Text_10413_9}>La Gringa</Text>
        </View>
        <View style={styles.View_10413_10}>
          <Text style={styles.Text_10413_10}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_11}>
          <Text style={styles.Text_10413_11}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/46dc/a1efc0bb71d27dec361583a2c2c16ed9"
          }}
          style={styles.ImageBackground_10413_12}
        />
        <View style={styles.View_10413_13}>
          <Text style={styles.Text_10413_13}>El Pachuco</Text>
        </View>
        <View style={styles.View_10413_14}>
          <Text style={styles.Text_10413_14}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_15}>
          <Text style={styles.Text_10413_15}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8034/2bd4/015feb7904c77780ada70b6885dab9ed"
          }}
          style={styles.ImageBackground_10413_16}
        />
        <View style={styles.View_10413_17}>
          <Text style={styles.Text_10413_17}>Taco Alto Born</Text>
        </View>
        <View style={styles.View_10413_18}>
          <Text style={styles.Text_10413_18}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_19}>
          <Text style={styles.Text_10413_19}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c5/2f12/6e86a17be1709e8c47a12382cd7f5c44"
          }}
          style={styles.ImageBackground_10413_20}
        />
        <View style={styles.View_10413_21}>
          <Text style={styles.Text_10413_21}>El Tamarindo</Text>
        </View>
        <View style={styles.View_10413_22}>
          <Text style={styles.Text_10413_22}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_23}>
          <Text style={styles.Text_10413_23}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4839/54b9/7590ff9afa251649c8781c0b2bff1345"
          }}
          style={styles.ImageBackground_10413_24}
        />
        <View style={styles.View_10413_25}>
          <Text style={styles.Text_10413_25}>La Taqueria</Text>
        </View>
        <View style={styles.View_10413_26}>
          <Text style={styles.Text_10413_26}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_27}>
          <Text style={styles.Text_10413_27}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b07/af8e/30b8bd1206f844dd30d4c64487c96e8f"
          }}
          style={styles.ImageBackground_10413_28}
        />
        <View style={styles.View_10413_29}>
          <Text style={styles.Text_10413_29}>La Fabrica del Tacos</Text>
        </View>
        <View style={styles.View_10413_30}>
          <Text style={styles.Text_10413_30}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_31}>
          <Text style={styles.Text_10413_31}>€15/person</Text>
        </View>
        <View style={styles.View_10413_32} />
        <View style={styles.View_10413_33} />
        <View style={styles.View_10413_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60dc/78b0/ba45f4e1d386355aa7729816786f4c79"
            }}
            style={styles.ImageBackground_10413_35}
          />
          <View style={styles.View_10413_36} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("125.68306010928963%") },
  View_10413_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("125.68306010928963%"),
    minHeight: hp("125.68306010928963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10413_5: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("18.442622950819672%"),
    justifyContent: "flex-end"
  },
  Text_10413_5: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_6: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("11.885245901639344%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_10413_7: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("12.431693989071038%"),
    justifyContent: "center"
  },
  Text_10413_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_8: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("24.863387978142075%"),
    resizeMode: "cover"
  },
  View_10413_9: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("45.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_10413_9: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_10: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("49.04371584699454%"),
    justifyContent: "flex-start"
  },
  Text_10413_10: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_11: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_10413_11: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_12: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("24.863387978142075%"),
    resizeMode: "cover"
  },
  View_10413_13: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("45.76502732240437%"),
    justifyContent: "flex-start"
  },
  Text_10413_13: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_14: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("49.04371584699454%"),
    justifyContent: "flex-start"
  },
  Text_10413_14: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_15: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_10413_15: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_16: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("57.786885245901644%"),
    resizeMode: "cover"
  },
  View_10413_17: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("78.68852459016394%"),
    justifyContent: "flex-start"
  },
  Text_10413_17: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_18: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("81.9672131147541%"),
    justifyContent: "flex-start"
  },
  Text_10413_18: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_19: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("85.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_10413_19: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_20: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("57.786885245901644%"),
    resizeMode: "cover"
  },
  View_10413_21: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("78.68852459016394%"),
    justifyContent: "flex-start"
  },
  Text_10413_21: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_22: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("81.9672131147541%"),
    justifyContent: "flex-start"
  },
  Text_10413_22: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_23: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("85.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_10413_23: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_24: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("90.7103825136612%"),
    resizeMode: "cover"
  },
  View_10413_25: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("111.6120218579235%"),
    justifyContent: "flex-start"
  },
  Text_10413_25: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_26: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("114.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_10413_26: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_27: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("118.0327868852459%"),
    justifyContent: "flex-start"
  },
  Text_10413_27: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_28: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("90.7103825136612%"),
    resizeMode: "cover"
  },
  View_10413_29: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("111.6120218579235%"),
    justifyContent: "flex-start"
  },
  Text_10413_29: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_30: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("114.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_10413_30: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_31: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("118.0327868852459%"),
    justifyContent: "flex-start"
  },
  Text_10413_31: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_32: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.863387978142075%")
  },
  View_10413_33: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("24.863387978142075%")
  },
  View_10413_34: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_10413_35: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    top: hp("3.4153005464480874%"),
    resizeMode: "cover"
  },
  View_10413_36: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
