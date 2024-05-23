import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

  return (
    <div className="mb-20 text-center">
        <Helmet>
            <title>Bistro Boss | Order Food</title>
        </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
        <div className="pt-16">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>

      </Tabs>
      </div>
    </div>
  );
};

export default Order;
