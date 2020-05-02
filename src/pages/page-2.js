import React from 'react';
import Helmet from 'react-helmet';
import symsa from '../assets/images/content-f.png'
import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Protective Measures</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Protective Measures</h1>
        <h2> Protective Measures against the new coronavirus
        </h2>
        <p>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:</p>
        <div className="row space-y-40 align-items-center justify-content-between">
        <div className="col-lg-5 col-12 order-md-last">
                    <div className="measure-img">
                        <img src={symsa} height="600" width="499" alt=""/>
                    </div>
        </div>
      <div className="col-lg-7">
        <p><strong className="text-primary">Wash your hands frequently:</strong> Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
        <p><strong className="text-primary">Maintain social distancing:</strong> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p>
        <p><strong className="text-primary">Avoid touching eyes, nose and mouth:</strong>Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick</p>
        <p><strong className="text-primary">Practice respiratory hygiene:</strong> Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</p>
        <p><strong className="text-primary">If you have fever, cough and difficulty breathing, seek medical care early:</strong> Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</p>
        <p><strong className="text-primary">If you have fever, cough and difficulty breathing, seek medical care early</strong></p>
        </div>
        </div>
      </Container>
      <Container>
       
      
      </Container>
      
      
    </Layout>
  );
};

export default SecondPage;
