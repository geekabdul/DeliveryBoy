import React from 'react';
import {ScrollView, View} from 'react-native';

//STRING IMPORTS
import Strings from '../../locales/Strings';

//COMMON_COMPONENTS IMPORTS
import MainContainer from '../../components/common/Container/MainContainer';
import BackHeader from '../../components/common/BackHeader/BackHeader';
import EarningCard from '../../components/EarningCard/EarningCard';

const OrderData = [
  {
    day: 'Today',
    perOrderEarnig: '30',
    todaysTotalDelivery: '10',
  },
  {
    day: 'Tomorrow',
    perOrderEarnig: '30',
    todaysTotalDelivery: '15',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
  {
    day: '24/05/2022',
    perOrderEarnig: '30',
    todaysTotalDelivery: '8',
  },
];

const TotalEarningScreen = () => {
  return (
    <MainContainer>
      <BackHeader headerTitle={Strings.TOTAL_EARNING} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {OrderData?.map((order, i) => (
          <View key={i}>
            <EarningCard data={order} />
          </View>
        ))}
      </ScrollView>
    </MainContainer>
  );
};

export default TotalEarningScreen;
