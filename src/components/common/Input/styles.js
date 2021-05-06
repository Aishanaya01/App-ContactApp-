import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
wrapper:{
    height:42,
    borderColor: colors.grey,
    borderWidth:1,
    borderRadius:4,
    paddingHorizontal:5,
    marginTop:5,
},

inputContainer:{
    paddingVertical:12,
},
textInput:{
flex:1,
// backgroundColor:'red',
width:'100%',
},
error:{
    color:colors.danger,
    paddingTop:4,
    fontSize:12,
}
})