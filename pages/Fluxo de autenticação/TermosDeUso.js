import {View, Image, ScrollView, StyleSheet, Text,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Css from "../css";
import Vector from '../../img/Vector.png';
import CustomButton from '../../Componentes/CustomButton';

export default function TermosDeUso (){
    const onPressTermos = () =>{
        navigation.navigate('Preferencias')
      }
    const navigation = useNavigation();

    return (
        <View style={Css.container}>
         <View style={Css.cabecalho}>
         <Image source={Vector} style={Css.img}/>
               </View>

                <View>
                    <Text style={styles.titulo}>
                        Termos de uso
                    </Text>
                    <ScrollView style={styles.View}>
                    <Text style={styles.corpo}>
                    <Text style={styles.corpoDestaque}> Seja bem-vindo ao Sextans!{"\n"}
                    {"\n"}</Text>

Estes termos e condições descrevem as regras de uso do aplicativo Sextans.
Reservamos nosso direito de corrigir e alterar estes termos e condições a qualquer momento sem prévio aviso.{"\n"}
{"\n"}
Ao acessar este aplicativo, você está de acordo com os termos e condições abaixo.{"\n"}
{"\n"}
<Text style={styles.corpoDestaque}>1. Licença:{"\n"}
{"\n"}</Text>
Exceto casos em que for indicado o contrário, Sextans e seus licenciados têm direito à propriedade intelectual de todo o material próprio do Sextans. Todos os direitos à propriedade intelectual são reservados perante a Lei.{"\n"}
{"\n"}
Você não tem permissão para:{"\n"}
{"\n"}
- Copiar ou republicar materiais próprios do Sextans;{"\n"}
- Vender, alugar ou sublocar materiais próprios do Sextans;{"\n"}
- Reproduzir, duplicar ou copiar materiais próprios do Sextans;{"\n"}
- Redistribuir conteúdos próprios do Sextans;{"\n"}
{"\n"}
Este Acordo terá efeito a partir da data de seu aceite.{"\n"}
{"\n"}
Partes deste aplicativo oferecem ao usuário a oportunidade de postar e discutir opiniões e informações em determinadas áreas. Sextans não filtra, edita, publica ou revisa Comentários antes que eles sejam apresentados no aplicativo.
Comentários refletem as opiniões do usuário que os posta. Na extensão em que as leis aplicáveis permitem, Sextans não se responsabiliza legalmente pelos Comentários ou quaisquer danos, riscos ou despesas causadas ou sofridas como resultado do uso, e/ou postagem e/ou aparência dos comentários deste aplicativo.{"\n"}
{"\n"}
O Sextans reserva a si o direito de remover quaisquer comentários e postagens que possam ser considerados inapropriados, ofensivos ou quebrem os Termos e Condições deste contrato.{"\n"}
{"\n"}
Você declara e garante que:{"\n"}
{"\n"}
- Você tem o direito de postar comentários e postagens em nosso aplicativo e tem todas as licenças e consentimentos para tal;{"\n"}
- Seus comentários e postagens não invadem qualquer propriedade intelectual, incluindo direitos autorais, patentes ou marcas registradas de terceiros;{"\n"}
- Seus comentários e postagens não contêm material difamatório, injurioso, ofensivo, sexual, imagens sensíveis, de alguma forma ilícito ou que configure invasão de privacidade;{"\n"}
- Seus comentários e postagens não serão usados para solicitar ou promover negócios ou apresentar atividades comerciais ou atividades ilícitas.{"\n"}
{"\n"}
Você por meio deste concede ao Sextans a licença não-exclusiva de usar, reproduzir, editar e autorizar outros a usar, reproduzir ou editar qualquer um de seus comentários e postagens em qualquer e todas as formas, formatos e mídias.{"\n"}
{"\n"}

<Text style={styles.corpoDestaque}>2.Remoção de conteúdo postados em nosso aplicativo:{"\n"}
{"\n"}</Text>
Se você encontrar qualquer conteúdo em nosso aplicativo que seja de qualquer forma ofensivo, você tem a liberdade de entrar em contato conosco e nos informar do problema a qualquer momento. Vamos considerar as solicitações de remoção de conteúdo, mas não somos obrigados a remover qualquer conteúdo do nosso aplicativo nem a responder diretamente à sua solicitação.{"\n"}
{"\n"}
Nós não garantimos que as informações contidas neste aplicativo são corretas. Nós não garantimos integralidade ou exatidão do conteúdo. Não garantimos que o aplicativo se manterá disponível ou que o material do aplicativo se manterá atualizado.{"\n"}
{"\n"}


<Text style={styles.corpoDestaque}>3.Declaração de Isenção de Responsabilidade:{"\n"}
{"\n"}</Text>
No máximo possível permitido por lei, nós excluímos todas as representações, garantias e condições relativas ao nosso aplicativo e ao uso deste aplicativo. Nada nesta declaração de isenção de responsabilidade vai:{"\n"}
{"\n"}
- Limitar ou excluir nossa responsabilidade ou sua responsabilidade por possíveis danos pessoais;{"\n"}
- Limitar ou excluir nossa responsabilidade ou sua responsabilidade por fraudes ou deturpações fraudulentas;{"\n"}
- Limitar nossa responsabilidade ou sua responsabilidade de quaisquer maneiras que não forem permitidas sob a lei;{"\n"}
- Excluir quaisquer responsabilidades suas ou nossas que não podem ser excluídas de acordo com a lei aplicável.{"\n"}
{"\n"}
As limitações e proibições de responsabilização listadas nesta Seção e em outras partes desta declaração:

 (A) estão sujeitas ao parágrafo anterior;
e (B) regem todas as responsabilizações que surgirem sob a declaração, incluindo responsabilizações surgidas em contrato, em delitos e em quebra de obrigações legais.{"\n"}
{"\n"}
Enquanto o aplicativo e as informações e serviços do aplicativo forem oferecidos gratuitamente, nós não seremos responsáveis por perdas e danos de qualquer natureza.
{"\n"}{"\n"}{"\n"}
<Text style={styles.corpoDestaque}>Atenciosamente, equipe Sextans.</Text>
                    </Text>
                    <CustomButton 
                text={'Concordar e Continuar'} 
                onPress={onPressTermos}
                type="TERMOS"
                />   
                    </ScrollView>
                </View>
              </View>
       );
     }

     const styles = StyleSheet.create({
        titulo: {
            fontSize: 50,
            fontWeight: '600',
            color: '#D6D6D6', 
            marginVertical: 25,
            alignSelf:'center'
        },
        corpo: {
            fontSize: 15,
            fontWeight: '400',
            color: '#D6D6D6',
            marginHorizontal:15

        },
        corpoDestaque: {
            fontSize: 19,
            fontWeight: '700',
            color: '#D6D6D6',
        },
        btn: {
            color: '#D6D6D6',

        },
        View: {
            marginBottom:225,
        },
      })