import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import DashboardService from '../../services/dashboard';
import debounceQuery from '../../helpers/debounce';

import SearchDataCard from '../../components/cards/searchDataCard';
import Header from '../../components/header';
import Loader from '../../components/loader';

import {commonStyle} from '../../config/commonStyles';
import Text from '../../components/text';

const DashboardScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const res = await DashboardService.getSearchData(query);
    setIsLoading(false);

    if (res) {
      setSearchData(res);
    }
  }, [query]);

  const changeQuery = value => {
    setQuery(value);
    debounceQuery(fetchData, 500);
  };

  return (
    <View style={commonStyle.flex1}>
      <Header searchQuery={query} setSearchQuery={changeQuery} />

      {isLoading ? null : searchData.items && searchData.items.length ? (
        <ScrollView>
          {searchData.items.map((cardData, index) => {
            return <SearchDataCard data={cardData} key={index} />;
          })}
        </ScrollView>
      ) : (
        <View>
          <Text>No results for this</Text>
        </View>
      )}

      {isLoading ? <Loader /> : null}
    </View>
  );
};

export default DashboardScreen;
