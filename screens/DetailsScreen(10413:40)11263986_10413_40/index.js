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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3428/14d7/9fab7857b0a3728586903fbfa0e0bced"
        }}
        style={styles.ImageBackground_10413_41}
      />
      <View style={styles.View_10413_42}>
        <Text style={styles.Text_10413_42}>
          Carrer de la Lleialtat, 16 08001 Barcelona
        </Text>
      </View>
      <View style={styles.View_10413_43}>
        <Text style={styles.Text_10413_43}>
          The Fried Chicken Bun Tacos Criollo Gringa pancakes
        </Text>
      </View>
      <View style={styles.View_10413_44}>
        <Text style={styles.Text_10413_44}>
          Gringa started life out as a Food truck, one of the first in
          Barcelona, a blue Citroen called Eureka Street Food. Run by Priscilla,
          a native Californian, and Gascon. After five years, they acquired a
          new partner, Juan and found their location in the Raval. A barrio in
          flux with many faces: principally a migrant neighborhood, with
          investment funds buying up entire buildings and leaving them empty –
          useful for ‘drug flats’. Things are changing, Barcelona is booming and
          El Raval and its attractive rents are becoming a real contender.
        </Text>
      </View>
      <View style={styles.View_10413_45}>
        <Text style={styles.Text_10413_45}>12€ 9€ 8€</Text>
      </View>
      <View style={styles.View_10413_46}>
        <Text style={styles.Text_10413_46}>Order</Text>
      </View>
      <View style={styles.View_10413_47}>
        <Text style={styles.Text_10413_47}>About</Text>
      </View>
      <View style={styles.View_10413_48}>
        <Text style={styles.Text_10413_48}>
          Mon-Fri: 19:00 - 0:00h Sat-Sun: 12:00 - 16:00h
        </Text>
      </View>
      <View style={styles.View_10413_49}>
        <Text style={styles.Text_10413_49}>La Gringa</Text>
      </View>
      <View style={styles.View_10413_50}>
        <View style={styles.View_10413_51} />
        <View style={styles.View_10413_52}>
          <Text style={styles.Text_10413_52}>RAVAL</Text>
        </View>
      </View>
      <View style={styles.View_10413_53}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3cf/43ef/33d5017417f5f715a8fea57b269636c1"
          }}
          style={styles.ImageBackground_10413_54}
        />
        <View style={styles.View_10413_55} />
      </View>
      <View style={styles.View_10413_56}>
        <View style={styles.View_10413_57} />
        <View style={styles.View_10413_58}>
          <Text style={styles.Text_10413_58}>Call</Text>
        </View>
      </View>
      <View style={styles.View_10413_59}>
        <View style={styles.View_10413_60} />
        <View style={styles.View_10413_61}>
          <Text style={styles.Text_10413_61}>Share</Text>
        </View>
      </View>
      <View style={styles.View_10413_62}>
        <View style={styles.View_10413_63} />
        <View style={styles.View_10413_64}>
          <Text style={styles.Text_10413_64}>Email</Text>
        </View>
      </View>
      <View style={styles.View_10413_65}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1425/095b/69de1a1e6f6bb4827b534bd1adb206ae"
          }}
          style={styles.ImageBackground_10413_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d764/29f4/7038c212680109e5d5a1dee5a46aedde"
          }}
          style={styles.ImageBackground_10413_67}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("174.72677595628417%") },
  ImageBackground_10413_41: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.43169398907104%"),
    minHeight: hp("37.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.56284153005464%"),
    resizeMode: "cover"
  },
  View_10413_42: {
    width: wp("86.4%"),
    minWidth: wp("86.4%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("28.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_10413_42: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_43: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("106.69398907103825%"),
    justifyContent: "flex-start"
  },
  Text_10413_43: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_44: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    minHeight: hp("60.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("127.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_10413_44: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_45: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%"),
    top: hp("106.69398907103825%"),
    justifyContent: "flex-start"
  },
  Text_10413_45: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_46: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("102.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_10413_46: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_47: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("122.40437158469946%"),
    justifyContent: "flex-start"
  },
  Text_10413_47: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_48: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("38.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_10413_48: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_49: {
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
  Text_10413_49: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_50: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("11.885245901639344%")
  },
  View_10413_51: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_10413_52: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316937%"),
    justifyContent: "center"
  },
  Text_10413_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_53: {
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
  ImageBackground_10413_54: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("3.5519125683060113%"),
    resizeMode: "cover"
  },
  View_10413_55: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10413_56: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("50.54644808743169%")
  },
  View_10413_57: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_10413_58: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("5.355190839923797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10929003439314044%"),
    justifyContent: "center"
  },
  Text_10413_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_59: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("50.54644808743169%")
  },
  View_10413_60: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_10413_61: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("5.355190839923797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10929003439314044%"),
    justifyContent: "center"
  },
  Text_10413_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_62: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("50.54644808743169%")
  },
  View_10413_63: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_10413_64: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("5.355190839923797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10929003439314044%"),
    justifyContent: "center"
  },
  Text_10413_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_65: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("88.11475409836066%")
  },
  ImageBackground_10413_66: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10413_67: {
    width: wp("5.815055338541667%"),
    height: hp("3.551912568306011%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
