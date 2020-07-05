import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
    const imageUrl = !result.image_url ? 'https://organicthemes.com/demo/restaurant/wp-content/themes/organic-restaurant/images/logo.png' : result.image_url;
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15,

    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ResultsDetail;
