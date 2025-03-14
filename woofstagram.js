import * as React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";

// Basic reusable components

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.avatar }} />
);

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 64,
  },
  heading: {
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "110%",
    letterSpacing: 0,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
  },
  title: {
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "120%",
    letterSpacing: "3%",
    textTransform: "uppercase",
    textAlign: "center",
    
  },
});

// App-specific components

const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar avatar={props.avatar} />
    <Title>{props.name}</Title>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    width: 88,
    height: 112,
    gap: 10,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginRight:5,
    marginBottom:10,
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,  
    elevation: 5

  },
  title: {
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "120%",
    letterSpacing: "3%",
    textTransform: "uppercase",
    color: "black",
  },
});

const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image style={woofPostStyles.image} source={props.image} />
    <View style={woofPostStyles.content}>
      <Text style={woofPostStyles.title}>{props.title}</Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={woofPostStyles.description}
      >
        {props.description}
      </Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    height: 70,

    marginBottom: 12,
  },
  image: { flex: 1, borderRadius: 12 },
  content: { flex: 2, marginLeft: 5, marginRight: 5 },
  title: { marginTop: 5, marginBottom: 5 },
  description: { fontSize: 10, overFlow: "hidden" },
  container: {
    paddingTop: 12,
    paddingRight: 12,

    paddingLeft: 12,
  },
});

// The screen rendering everything
const HomeScreen = () => (
  <ScrollView>
    <Heading style={{paddingLeft:"15px"}}>Trending Woofers</Heading>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:15}}>
      {data.woofs.map((woof) => {
        return(<WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />);
      })}
      
    </ScrollView>
    <Heading children="New Woof Posts" />
    <FlatList 
      data={data.posts}
      renderItem={({item}) =>   <WoofPost title={item.title}
      image={item.image} 
      description={item.description}
      />}
      keyExtractor={item => item.id}
      style={{marginLeft:"15px"}}
      
    />
    
   
  
  </ScrollView>
);

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9FA" }}>
    <HomeScreen />
  </SafeAreaView>
);

export default App;

// "Fake" API data to use in your app
const data = {
  woofs: [
    {
      id: "woof-1",
      name: "Rex",
      avatar:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80",
      caretaker: "Victor Grabarczyk",
      source: "https://unsplash.com/photos/x5oPmHmY3kQ",
    },
    {
      id: "woof-2",
      name: "Ball",
      avatar:
        "https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80",
      caretaker: "Tatiana Rodriguez",
      source: "https://unsplash.com/photos/J40C1k6Fut0",
    },
    {
      id: "woof-3",
      name: "Happy",
      avatar:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80",
      caretaker: "Marliese Streefland",
      source: "https://unsplash.com/photos/2l0CWTpcChI",
    },
    {
      id: "woof-4",
      name: "Fluffy",
      avatar:
        "https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80",
      caretaker: "Nick Fewings",
      source: "https://unsplash.com/photos/rMKXLAIa2OY",
    },
    {
      id: "woof-5",
      name: "Spirit",
      avatar:
        "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80",
      caretaker: "Jamie Street",
      source: "https://unsplash.com/photos/uNNCs5kL70Q",
    },
  ],
  posts: [
    {
      id: "post-1",
      image:
        "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80",
      title: "Happy Woofs",
      description:
        "How to keep your woof health and happy. We've asked some of the best experts out there.",
      caretaker: "Jamie Street",
      source: "https://unsplash.com/photos/UtrE5DcgEyg",
    },
    {
      id: "post-2",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80",
      title: "Woofs & friends",
      description: "Best friends are important for humans, but also for dogs.",
      caretaker: "Krista Mangulsone",
      source: "https://unsplash.com/photos/9gz3wfHr65U",
    },
    {
      id: "post-3",
      image:
        "https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80",
      title: "Good Woofs",
      description:
        "A good woof is a woof that brings joy. Here are a few tips to let your woof behave.",
      caretaker: "Olia Nayda",
      source: "https://unsplash.com/photos/f6v_Q0WXEK8",
    },
    {
      id: "post-4",
      image:
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80",
      title: "Wild Woofs",
      description:
        "In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.",
      caretaker: "Anoir Chafik",
      source: "https://unsplash.com/photos/2_3c4dIFYFU",
    },
    {
      id: "post-5",
      image:
        "https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80",
      title: "Sleepy Woofs",
      description:
        "Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.",
      caretaker: "Max Singh",
      source: "https://unsplash.com/photos/2637Pic9xMw",
    },
    {
      id: "post-6",
      image:
        "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80",
      title: "Exploring Woofs",
      description:
        "Just sitting in one place is boring for most woofs. How do woofs explore the world?",
      caretaker: "Jamie Street",
      source: "https://unsplash.com/photos/wcO2PWLuQ3U",
    },
  ],
};
