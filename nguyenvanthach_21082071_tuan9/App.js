import { Text,View, StyleSheet,TextInput,Image,FlatList,TouchableOpacity,ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const  clother=[
{id:1,name:'Parachute jacket',price:'$110',like_heart:'',description:'',image:require('./download (3).png')},
{id:1,name:'Relax jacket',price:'$120',like_heart:'',description:'',image:require('./download (4).png')},
{id:1,name:' Villa',price:'$135',like_heart:'',description:'',image:require('./download (5).png')},
];

const person=[
{id:1,name:'Men'},
{id:2,name:'Women'},
{id:3,name:'Kids'},
{id:4,name:'Shoes'},
{id:5,name:'See All'},
] ;

export default function App() {
  return (
 
    <View style={styles.container}>
       <ScrollView>
      <View style={styles.header}>
<TextInput style={styles.input} placeholder='Search here' />
<Image style={styles.imgheader} source={require('./download (1).png')} />
<Image style={styles.imgheader2} source={require('./download.png')} />
      </View>

      <FlatList
        horizontal
        data={person}
        renderItem={({ item }) => (
          <View style={styles.person}>
            <Text style={styles.personName}>{item.name}</Text>
          </View>
        )}
      
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false} 
        style={styles.flat1} 
      />
      <View style={styles.banner}>
     <Image style={styles.imgbanner} source={require('./download (2).png')} />
     <Text style={styles.textbanner}>Get your own clother and style!</Text>
<TouchableOpacity style={styles.button}>
<Text style={styles.textbutton}>More</Text>
</TouchableOpacity>

      </View>

      <View style={styles.thisweek}>
      <Text style={styles.textthisweek}>This Weeks HightLight! </Text>
      <Text style={styles.textsee}>See all</Text>
      </View>
       <FlatList
        horizontal
        data={clother}
        renderItem={({ item }) => (
          <View style={styles.clother}>
           <Image source={item.image} style={styles.animaltypeImage} />
            <Text style={styles.coltherName}>{item.name}</Text>
                 <Text style={styles.coltherPrice}>{item.price}</Text>


          </View>
        )}     
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false} 
        style={styles.flat2} 
      />
<Text style={
  styles.newes}>Newest!</Text>
<View style={styles.banner2}>
 <Image style={styles.imgbanner2} source={require('./download (6).png')} />
 <Text style={styles.textbanner2}>Coming Soon</Text>
</View>
<View style={styles.footer}>
 <Image style={styles.imgft8} source={require('./download (8).png')} />
  <Image style={styles.imgft9} source={require('./download (9).png')} />
   <Image style={styles.imgft10} source={require('./download (10).png')} />
    <Image style={styles.imgft11} source={require('./download (11).png')} />
     <Image style={styles.imgft12} source={require('./download (12).png')} />
</View>

   </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  header:{
flexDirection:'row',
alignItems:'center'
  },
input:{
height:30,
width:250,
borderWidth:2,
position:'relative'
},
imgheader:{
  height:15,
  width:15,
  position:'absolute',
  left:210
},
imgheader2:{
  height:40,
  width:40,
  marginLeft:30
},
banner:{
//marginBottom:1
},

imgbanner:{
width:'100%',
height:200,
position:'relative'
},
textbanner:{
  position:'absolute',
  color:'white',
  fontSize:30,
  textAlign:'center',
  marginTop:50
},
button:{
  position:'absolute',
  backgroundColor:'black',
  borderRadius:10,
  height:20,
  width:50,
    marginTop:10,
  marginLeft:250
},
textbutton:{
  color:'white',
  textAlign:'center',

},
thisweek:{
  flexDirection:'row',
marginTop:10,
fontWeight:'bold'
},
textthisweek:{
  fontWeight:'bold'
},
textsee:{
  marginLeft:100,
  fontWeight:'bold'
},
flat2:{
//paddingBottom:120
},
person:{
  marginHorizontal:14,
  
},
personName:{
  backgroundColor:'black',
  color:'white',
  borderRadius:10
},
clother:{
    marginHorizontal:3,
},
coltherName:{
  fontWeight:'bold'
},
coltherPrice:{
  fontWeight:'bold',
  textAlign:'center',
},
newes:{
  fontWeight:'bold',
},
banner2:{

},
 imgbanner2:{
 width:'100%',
 height:120,
 position:'relative'
 },
 textbanner2:{
    position:'absolute',
    color:'white',
    fontSize:30,
    margin:40
 },
 footer:{
   flexDirection:'row',
   backgroundColor:'blue',
  padding:10
 },
 imgft8:{
height:30,
width:30
 },
 imgft9:{
height:30,
width:30,

 },

imgft10:{
height:30,
width:30
 },

imgft11:{
height:30,
width:30
 },

imgft12:{
height:30,
width:30
 },



});
