import { View, Text, StyleSheet } from "react-native-web";

import { tagColorCheck } from "../../utils/utils";

export default function Tag({content, color}) {



    const styles=StyleSheet.create({
        container: {
            display: "flex",
            backgroundColor: tagColorCheck(color),
            padding: 5,
            marginHorizontal: 5,
            borderRadius: "8px",
        },
        text: {
            lineHeight: 30,
        }
    })


    return(
        <View style={styles.container}> 
            <Text style={{color: 'white'}}>
                {content}
            </Text>
        </View>
    )
}