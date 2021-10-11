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
      <View style={styles.View_10417_1088}>
        <View style={styles.View_10417_1089}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b68/71be/ff21c8ae5b38e910f4361adb7814bf20"
            }}
            style={styles.ImageBackground_10417_1090}
          />
          <View style={styles.View_10417_1091} />
          <View style={styles.View_10417_1092}>
            <Text style={styles.Text_10417_1092}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_1093}>
            <Text style={styles.Text_10417_1093}>39m • Alden Johngon</Text>
          </View>
        </View>
        <View style={styles.View_10417_1094}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5181/47bb/28c42f60ac8dd71b1de267f90de57170"
            }}
            style={styles.ImageBackground_10417_1095}
          />
          <View style={styles.View_10417_1096}>
            <Text style={styles.Text_10417_1096}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_1097}>
            <Text style={styles.Text_10417_1097}>39m • Alden Johngon</Text>
          </View>
        </View>
        <View style={styles.View_10417_1098}>
          <View style={styles.View_10417_1099} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df85/64d4/12a0e3015789dae66bb2ea42a55bde65"
            }}
            style={styles.ImageBackground_10417_1100}
          />
          <View style={styles.View_10417_1101}>
            <Text style={styles.Text_10417_1101}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
          <View style={styles.View_10417_1102}>
            <Text style={styles.Text_10417_1102}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1103}>
            <Text style={styles.Text_10417_1103}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1104}>
          <View style={styles.View_10417_1105} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_1106}
          />
          <View style={styles.View_10417_1107}>
            <Text style={styles.Text_10417_1107}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_1108}>
            <Text style={styles.Text_10417_1108}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1109}>
            <Text style={styles.Text_10417_1109}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1110}>
          <View style={styles.View_10417_1111} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_1112}
          />
          <View style={styles.View_10417_1113}>
            <Text style={styles.Text_10417_1113}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_1114}>
            <Text style={styles.Text_10417_1114}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1115}>
            <Text style={styles.Text_10417_1115}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1116}>
          <View style={styles.View_10417_1117} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_1118}
          />
          <View style={styles.View_10417_1119}>
            <Text style={styles.Text_10417_1119}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1120}>
            <Text style={styles.Text_10417_1120}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
          <View style={styles.View_10417_1121}>
            <Text style={styles.Text_10417_1121}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1122}>
          <View style={styles.View_10417_1123} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_1124}
          />
          <View style={styles.View_10417_1125}>
            <Text style={styles.Text_10417_1125}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_1126}>
            <Text style={styles.Text_10417_1126}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1127}>
            <Text style={styles.Text_10417_1127}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1128}>
          <View style={styles.View_10417_1129} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_1130}
          />
          <View style={styles.View_10417_1131}>
            <Text style={styles.Text_10417_1131}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_1132}>
            <Text style={styles.Text_10417_1132}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1133}>
            <Text style={styles.Text_10417_1133}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_1134}>
        <View style={styles.View_10417_1135}>
          <Text style={styles.Text_10417_1135}>Feed</Text>
        </View>
        <View style={styles.View_10417_1136}>
          <View style={styles.View_10417_1137} />
          <View style={styles.View_10417_1138}>
            <Text style={styles.Text_10417_1138}>News</Text>
          </View>
        </View>
        <View style={styles.View_10417_1139}>
          <View style={styles.View_10417_1140} />
          <View style={styles.View_10417_1141}>
            <Text style={styles.Text_10417_1141}>Scores</Text>
          </View>
        </View>
        <View style={styles.View_10417_1142}>
          <View style={styles.View_10417_1143} />
          <View style={styles.View_10417_1144}>
            <Text style={styles.Text_10417_1144}>Transfers</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("202.18579234972677%") },
  View_10417_1088: {
    width: wp("100%"),
    height: hp("202.18579234972677%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_1089: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("21.03825136612022%")
  },
  ImageBackground_10417_1090: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1091: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_1092: {
    width: wp("83.17096354166667%"),
    minWidth: wp("83.17096354166667%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011461385091145%"),
    top: hp("14.61748633879781%"),
    justifyContent: "flex-end"
  },
  Text_10417_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1093: {
    width: wp("48.93982747395834%"),
    minWidth: wp("48.93982747395834%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011461385091145%"),
    top: hp("22.677595628415297%"),
    justifyContent: "flex-end"
  },
  Text_10417_1093: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1094: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("110.65573770491804%")
  },
  ImageBackground_10417_1095: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_1096: {
    width: wp("83.17096354166667%"),
    minWidth: wp("83.17096354166667%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.01145528157552%"),
    top: hp("14.617486338797804%"),
    justifyContent: "flex-end"
  },
  Text_10417_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1097: {
    width: wp("48.93982747395834%"),
    minWidth: wp("48.93982747395834%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.01145528157552%"),
    top: hp("22.677595628415276%"),
    justifyContent: "flex-end"
  },
  Text_10417_1097: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1098: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("50%")
  },
  View_10417_1099: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1100: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1101: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_1101: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1102: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.1796450171965716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633881%"),
    justifyContent: "flex-end"
  },
  Text_10417_1102: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1103: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185794%"),
    justifyContent: "flex-start"
  },
  Text_10417_1103: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1104: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("70.21857923497268%")
  },
  View_10417_1105: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1106: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1107: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_1107: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1108: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.1796450171965716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633881%"),
    justifyContent: "flex-end"
  },
  Text_10417_1108: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1109: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185787%"),
    justifyContent: "flex-start"
  },
  Text_10417_1109: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1110: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("90.43715846994536%")
  },
  View_10417_1111: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1112: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1113: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_1113: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1114: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.1796439749295593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633867%"),
    justifyContent: "flex-end"
  },
  Text_10417_1114: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1115: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185787%"),
    justifyContent: "flex-start"
  },
  Text_10417_1115: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1116: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("139.61748633879782%")
  },
  View_10417_1117: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1118: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1119: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179648143997609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633867%"),
    justifyContent: "flex-end"
  },
  Text_10417_1119: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1120: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185773%"),
    justifyContent: "flex-start"
  },
  Text_10417_1120: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1121: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_10417_1121: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1122: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("159.8360655737705%")
  },
  View_10417_1123: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1124: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1125: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_10417_1125: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1126: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179648143997609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633867%"),
    justifyContent: "flex-end"
  },
  Text_10417_1126: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1127: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185773%"),
    justifyContent: "flex-start"
  },
  Text_10417_1127: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1128: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("180.05464480874315%")
  },
  View_10417_1129: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1130: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1131: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("2.3224043715847245%"),
    justifyContent: "flex-start"
  },
  Text_10417_1131: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1132: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("3.179648143997609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("12.491461748633895%"),
    justifyContent: "flex-end"
  },
  Text_10417_1132: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1133: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("7.513661202185801%"),
    justifyContent: "flex-start"
  },
  Text_10417_1133: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.989071038251364%"),
    minHeight: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 245, 249, 1)",
    overflow: "hidden"
  },
  View_10417_1135: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("6.0109289617486334%"),
    justifyContent: "flex-end"
  },
  Text_10417_1135: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1136: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("13.661202185792352%")
  },
  View_10417_1137: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645
  },
  View_10417_1138: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_1138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1139: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.85898844401042%"),
    top: hp("13.661202185792352%")
  },
  View_10417_1140: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645
  },
  View_10417_1141: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_1141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1142: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57830810546875%"),
    top: hp("13.661202185792352%")
  },
  View_10417_1143: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)"
  },
  View_10417_1144: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_1144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
