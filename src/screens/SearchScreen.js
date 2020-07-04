import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            if (result.price) {    
                return result.price.length === price;
            } else {
                if(price===1){
                    return true;
                }
            }
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
            <ResultsList
                title='Cost Effective'
                results={filterResultsByPrice(1)} />
            <ResultsList
                title='Big Pricier'
                results={filterResultsByPrice(2)} />
            <ResultsList
                title='Big Speder'
                results={filterResultsByPrice(3)} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;