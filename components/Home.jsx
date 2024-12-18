import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import supabase from "../supabase"; // Adjust based on your setup

export const  Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    try {
      // Replace 'your_table_name' with the actual name of your Supabase table
      const { data: items, error } = await supabase
        .from("reactNative")
        .select("*");
      if (error) throw error;

      setData(items);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
 
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Enrolled: {item.enrolled ? "Yes" : "No"}</Text>
    </View>
  );
console.log(data,'this is data frm supabase table')
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Home;
