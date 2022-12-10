import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Componentes/loading";
import AS_API from "@react-native-async-storage/async-storage";
import Css from "../css";
import Vector from "../../img/Vector.png";
import Voltar from "../../img/voltar.png";
import UserBase from "../../img/userBase.png";
import tresPontos from "../../img/iconTresPontos.png";
import Comentar from "../../img/iconComentar.png";
import Curtir from "../../img/iconCurtir.png";
import Salvar from "../../img/iconSalvar.png";

export default function ForumLinguas_Estrangeiras() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [responsePending, setResponsePending] = useState(false);
  const [preferences, setPreferences] = useState([]);
  const [keyTagPressed, setKeyTagPressed] = useState(2);
  const [posts, setPosts] = useState([]);

  const getTags = async () => {
    setResponsePending(true);
    try {
      await fetch("https://sextans.loca.lt/forum/list", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          console.log([
            Array.isArray(responseJson) ? responseJson : "não é um array",
          ]);
          setPreferences(responseJson);
        });
    } catch (error) {
      console.log(error);
    }
    setResponsePending(false);
  };

  useEffect(() => {
    getTags();
  }, []);

  const navigation = useNavigation();

  const onPressVoltar = () => {
    navigation.navigate("Routes");
  };

  const onPressTags = (id) => {
    setKeyTagPressed(id);
  };

  const onPressComentar = (id) => {
    const receivedPostId = id;
    const postId = JSON.stringify(receivedPostId);
    AS_API.setItem("postId", postId);
    navigation.navigate("Comentar");
  };

  const onPressPost = (id) => {
    const receivedPostId = id;
    const postId = JSON.stringify(receivedPostId);
    AS_API.setItem("postId", postId);
    navigation.navigate("PostEmDestaque");
  };

  const onPressSendSave = async (id) => {
    const bool = "1";
    const receivedPostId = id;
    const postId = JSON.stringify(receivedPostId);
    const receivedToken = await AS_API.getItem("token");
    const token = receivedToken.slice(1, -1);
    const bearer = `Bearer ${token}`;

    setResponsePending(true);
    try {
      await fetch(`https://sextans.loca.lt/post/${postId}/saved/${bool}`, {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Accept: "application/json",
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: bool,
        }),
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          console.log(responseJson);
        });
    } catch (error) {
      console.log(error);
    }
    setResponsePending(false);
  };

  const onPressSendLike = async (id) => {
    const bool = "1";
    const receivedPostId = id;
    const postId = JSON.stringify(receivedPostId);
    const receivedToken = await AS_API.getItem("token");
    const token = receivedToken.slice(1, -1);
    const bearer = `Bearer ${token}`;

    setResponsePending(true);
    try {
      await fetch(`https://sextans.loca.lt/post/${postId}/liked/${bool}`, {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Accept: "application/json",
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: bool,
        }),
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          console.log(responseJson);
        });
    } catch (error) {
      console.log(error);
    }
    setResponsePending(false);
  };

  const onPressSendReport = async (id) => {
    const bool = "1";
    const receivedPostId = id;
    const postId = JSON.stringify(receivedPostId);
    const receivedToken = await AS_API.getItem("token");
    const token = receivedToken.slice(1, -1);
    const bearer = `Bearer ${token}`;
    setVisibleModal(false);
    setResponsePending(true);
    alert("A postagem foi reportada ,obrigado pelo feedback");
    try {
      await fetch(`https://sextans.loca.lt/post/${postId}/report/${bool}`, {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Accept: "application/json",
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: bool,
        }),
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          console.log(responseJson);
        });
    } catch (error) {
      console.log(error);
    }
    setResponsePending(false);
  };

  const getPosts = async () => {
    setResponsePending(true);

    const receivedToken = await AS_API.getItem("token");
    const token = receivedToken.slice(1, -1);
    const bearer = `Bearer ${token}`;
    console.log(bearer);

    try {
      await fetch(`https://sextans.loca.lt/tag_post/list/${keyTagPressed}`, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          console.log(responseJson);
          setPosts(responseJson);
        });
    } catch (error) {
      console.log(error);
    }

    setResponsePending(false);
  };

  useEffect(() => {
    getPosts();
  }, [keyTagPressed]);

  return (
    <View style={Css.container}>
      <View style={Css.cabecalho}>
        <Image source={Vector} style={Css.img} />
        <Pressable onPress={onPressVoltar} style={styles.botaoVoltar}>
          <Image source={Voltar} style={styles.imagemVoltar}></Image>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerMateria}>
            <Text style={styles.textMateria}>LE</Text>
          </View>
          <Text style={styles.textTitle}>Línguas Estrangeiras</Text>
          <Text style={styles.textDescription}>
          Existem no mundo milhares de linguas faladas por mais diferentes povos. Nas américas, duas de grande relevância são o Inglês e o Espanhol.
          </Text>
          <Text style={styles.textUnderline}>Tags</Text>
          <View style={styles.containerTags}>
            {preferences.map((preferences) => {
              if (preferences.id === 2) {
                return preferences.tags.map((tags) => [
                  <Pressable
                    key={tags.id}
                    onPress={() => onPressTags(tags.id)}
                    style={[
                      styles.tags_container,
                      keyTagPressed === tags.id
                        ? styles.tags_container_SECONDARY
                        : styles.tags_container_PRIMARY,
                    ]}
                  >
                    <Text
                      style={[
                        styles.tags_text,
                        keyTagPressed === tags.id
                          ? styles.tags_text_SECONDARY
                          : styles.tags_text_PRIMARY,
                      ]}
                    >
                      {tags.name}
                    </Text>
                  </Pressable>,
                ]);
              }
            })}
          </View>
          <Text style={styles.textUnderline}>Posts</Text>
        </View>
        <FlatList
          style={styles.FlatList}
          data={posts}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={Css.postCard}>
                <TouchableOpacity onPress={() => onPressPost(item.id)}>
                  <Image
                    source={
                      item.user.avatar === null ? UserBase : item.user.avatar
                    }
                    style={Css.fotoPerfilPost}
                  />
                  <Text style={Css.nomeDeUsuarioPost}> {item.user.name} </Text>
                  <Text style={Css.userArrobaPost}>
                    {" "}
                    @{item.user.username}{" "}
                  </Text>
                  <Text style={Css.dataPostCorpo}> {item.date} </Text>
                  <TouchableOpacity
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    activeOpacity={0.2}
                    onPress={() => setVisibleModal(true)}
                  >
                    <View>
                      <Modal
                        animationType="fade"
                        transparent={true}
                        visible={visibleModal}
                        onRequestClose={() => setVisibleModal(false)}
                      >
                        <TouchableOpacity
                          style={styles.ViewModal}
                          onPress={() => {
                            setVisibleModal({ modalVisible: false });
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => onPressSendReport(item.id)}
                            style={styles.btnModal}
                          >
                            <Text style={styles.TxtModal}>Denunciar</Text>
                          </TouchableOpacity>
                        </TouchableOpacity>
                      </Modal>
                    </View>

                    <Image source={tresPontos} style={Css.IconTresPontos} />
                  </TouchableOpacity>
                  <Text style={Css.forumPostCorpo}>
                    {" "}
                    #{item.tag.forum.name}{" "}
                  </Text>
                  <Text style={Css.tituloPostCorpo}> {item.title} </Text>
                  {item.image === null ? (
                    <Text style={Css.txtPostCorpo}>
                      {" "}
                      {item.description_preview}{" "}
                    </Text>
                  ) : (
                    <Image
                      source={{ uri: item.image.url }}
                      style={Css.fotoExemploPost}
                    />
                  )}
                  <TouchableOpacity activeOpacity={0.7} style={Css.tagPost}>
                    <Text style={Css.txtTag}> {item.tag.name} </Text>
                  </TouchableOpacity>

                  <View style={styles.row}>
                    <TouchableOpacity
                      onPress={() => onPressComentar(item.id)}
                      activeOpacity={0.7}
                    >
                      <Image source={Comentar} style={Css.iconComentar} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => onPressSendLike(item.id)}
                      activeOpacity={0.7}
                    >
                      <Image source={Curtir} style={Css.iconCurtir} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => onPressSendSave(item.id)}
                      activeOpacity={0.7}
                    >
                      <Image source={Salvar} style={Css.iconSalvar} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
      {responsePending ? <Loading/> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  containerMateria: {
    marginTop: 25,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "#D6D6D6",
    width: 96,
    height: 96,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTags: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  textMateria: {
    fontSize: 60,
    color: "#000000",
    fontWeight: "600",
  },
  textTitle: {
    color: "#D6D6D6",
    fontSize: 30,
    fontWeight: "bold",
  },
  textDescription: {
    color: "#D6D6D6",
    fontSize: 15,
  },
  textUnderline: {
    marginVertical: 25,
    width: 90,
    color: "#D6D6D6",
    fontSize: 25,
    fontWeight: "600",
    borderBottomColor: "#D6D6D6",
    borderWidth: 1,
    alignSelf: "center",
    textAlign: "center",
  },
  imagemVoltar: {
    alignSelf: "flex-start",
  },
  botaoVoltar: {
    alignSelf: "flex-start",
    top: -8,
  },
  tags_text: {
    fontWeight: "600",
    fontSize: 10,
  },
  tags_text_PRIMARY: {
    color: "#000",
  },
  tags_text_SECONDARY: {
    color: "#fff",
  },
  tags_container: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 57,
    alignItems: "center",
    justifyContent: "center",
  },
  tags_container_PRIMARY: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 2,
  },
  tags_container_SECONDARY: {
    backgroundColor: "#000",
    borderColor: "#fff",
    borderWidth: 2,
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: "8%",
    marginEnd: "3%",
    marginTop: "-8%",
  },
  FlatList: {
    marginBottom: 90,
  },
  ViewModal: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 60,
  },
  btnModal: {
    width: 120,
    backgroundColor: "#818181",
    height: 80,
    top: 250,
    alignSelf: "center",
    borderRadius: 25,
  },
  TxtModal: {
    textAlign: "center",
    marginTop: 30,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
