import { Page, Text, Image, View, Document, StyleSheet, Font, Canvas } from '@react-pdf/renderer';

import './PDFCV.css';

import ProgressBar from './ProgressBar';

import Experience from './Experience';




Font.register({ family: 'opensans-bold', src: 'css/fonts/opensans/OpenSans-Bold-webfont.ttf' });

const cvStyle = StyleSheet.create({
    div1: {
        backgroundColor: '#1D2839',
        width: '36%',
        height: '100vh'
    },

    div2:{
        backgroundColor: '#fff',
        width: '64%',
        height: '100vh',
        right: 0        

    },
    profilePicRound:{
        paddingLeft: '17%',
        paddingRight: '17%',
        paddingTop: '6%',
        paddingBottom: '6%'
    },


    titleTextLeft: {
        textAlign: 'center',
        marginTop: '7%',
        color: '#2974E2',
        font: 'op',
        fontFamily: 'opensans-bold'

    },
    socialItemDiv: {
        fontSize: '10px',
        textAlign: 'right',
        color: 'white',
        paddingRight: '10%',
        alignItems: 'left'
    },
    githubIcon: {
        width: '22px',

        top: '50%',
        marginLeft: '8%',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '1px',
        paddingBottom: '1px'


    },
    linkedinIcon: {
        width: '18px',

        top: '50%',
        marginLeft: '8%',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '1px',
        paddingBottom: '1px'
    },
    trailheadIcon: {
        width: '26px',

        top: '50%',
        marginLeft: '7%',
        paddingLeft: '2px',
        paddingRight: '2px',
        paddingTop: '1px',
        paddingBottom: '1px'
    },

    divSkill: {
        fontSize: '10px',
        textAlign: 'left',
        color: 'white',
        paddingRight: '8%',
        alignItems: 'left',
        // paddingBottom: '-40px',
        marginBottom: '-34px'
    },

    picSpace: {
        height: '3%',
    },

    body: {
        backgroundImage: "url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')"
    }
    ,wrapper:{
        display: 'flex',
        flexDirection: 'row',
    }


});







const PDFCV = (props) => {

    const educationData = [
        {
          company: 'Computer Science Degree',
          date: '2017 - 202X',
          details: [
            'Granada University - Universidad de Granada, Granada, Spain • 2017-201X',
          ],
          position: '',
        }
      ];

      const experienceData = [
        {
            company: 'Wazuh | Cloud Team | Cloud engineer - internship',
            date: 'jul. 2022 - ene. 2023 · 7 months',
            details: [
              'Kubernetes - JSON - Bash - Pyhton - Docker',

              'Amazon Web Services (AWS)',
              
              'Agile methodologies',
              
            ],
            position: '',
          }
      ]



    const page1 = (

        <Page size="A4" style={[ ]} >

            <View style={[cvStyle.wrapper]}>
            <View style= {[cvStyle.div1]}>
                
                <View style={cvStyle.picSpace}></View>
                <Image src="images/pic-rounded.png" style={cvStyle.profilePicRound}></Image>

                <Text style={cvStyle.titleTextLeft}>Contact</Text>
                <View style={cvStyle.socialItemDiv}>
                    <Image src="images/github_blue.png" style={cvStyle.githubIcon} ></Image>
                    <Text>{props.data.SPANISH && props.data.SPANISH.general.github}</Text>
                </View>

                <View style={cvStyle.socialItemDiv}>
                    <Image src="images/linkedin_blue.png" style={cvStyle.linkedinIcon}></Image>
                    <Text>{props.data.SPANISH && props.data.SPANISH.general.linkedin}</Text>
                </View>

                <View style={cvStyle.socialItemDiv}>
                    <Image src="images/trailhead_blue.png" style={cvStyle.trailheadIcon}></Image>
                    <Text>{props.data.SPANISH && props.data.SPANISH.general.trailhead}</Text>
                </View>
                <View>
                    <Canvas style={[{ paddingBottom: '17px' }]}
                        paint={painter =>
                            painter
                                .moveTo(40, 40)
                                .lineTo(160, 40)
                                .fill('lightgray')
                        }
                    />

                </View>



                <View>
                    <Text style={[cvStyle.titleTextLeft, { marginTop: '10px', marginBottom: '10px' }]}>Tech & Soft Skills</Text>
                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Java</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Javascript</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill} >
                        <Text style={{ top: '10px', left: '20px' }}>SQL/NoSQL</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Docker</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>GitHub</Text>
                        <ProgressBar value={90} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>AWS</Text>
                        <ProgressBar value={70} />
                    </View>


                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Critical Thinking</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Communication</Text>
                        <ProgressBar value={60} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Problem Solving</Text>
                        <ProgressBar value={70} />
                    </View>

                    <View style={cvStyle.divSkill}>
                        <Text style={{ top: '10px', left: '20px' }}>Empathy</Text>
                        <ProgressBar value={80} />
                    </View>


                </View>

            </View>
            
            <View  style={[cvStyle.div2]}>
                <Text style={{position:'absolute', top:'35px', fontSize: 22, left: '35px', color: 'white', fontFamily: 'opensans-bold', zIndex: '-1'}}>José Maldonado Correa</Text>
                <Text style={{position:'absolute', top:'65px', fontSize: 14, left: '32px', color: 'white', fontFamily: 'opensans-bold', zIndex: '-1'}}>Software Engineer, DevOps</Text>
                <Image src={'images/fondo.png'} style={{zIndex: '1'}}></Image>

                <Experience style={[{paddingTop: '40px'}]} title={'Education'} data={educationData}></Experience>
                <Experience style={[{}]} title={'Experience'} data={experienceData}></Experience>
            </View>
            </View>
        </Page>
    )


    return (
        
        <Document>
            {page1}
        </Document>

    );
}


export default PDFCV;