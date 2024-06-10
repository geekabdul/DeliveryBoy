import React from 'react';
import {ScrollView, View} from 'react-native';

//STRING IMPORTS
import Strings from '../../locales/Strings';
import OrderCard from '../../components/common/OrderCard/OrderCard';

//COMMON_COMPONENTS IMPORTS
import MainContainer from '../../components/common/Container/MainContainer';
import BackHeader from '../../components/common/BackHeader/BackHeader';

const OrderData = [
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
  {
    orderStatus: 'Rejected',
    OrderId: '3456ygvbuqwe5678ijuhsad7678',
    orderPlacedOn: '07-05-2022',
    quantity: '01',
    name: 'Joney Depth',
    email: 'joney@gmail.com',
    mobileNo: '+91 1234567890',
    address: '389 Ranchview Dr. Richardson, California 62639',
    PaymentStatus: 'COD - Reject',
    Total: '150',
    productImage:
      'https://i.gadgets360cdn.com/products/large/1533829125_635_samsung_galaxy_note_9_stylus.jpg?downsize=*:420&output-quality=80',
    productName: 'Samsung Galaxy Note 9 Pro',
    productDetails: 'Internal 1TB',
  },
];

const AllRejectedScreen = () => {
  return (
    <MainContainer>
      <BackHeader headerTitle={Strings.ALL_REJECTED} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {OrderData?.map((order, i) => (
          <View key={i}>
            <OrderCard data={order} />
          </View>
        ))}
      </ScrollView>
    </MainContainer>
  );
};

export default AllRejectedScreen;
