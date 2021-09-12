import React from 'react';
import { Descriptions } from 'antd';
import axios from 'axios';
import { Image, Button } from 'antd';
import CvImage from '../images/CvImage.png';
import '../index.css'
import { DownloadOutlined } from '@ant-design/icons';

const baseURL='user';

const Description = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }, []);
  if (!user) return null;

  return (
    <div>
      <Descriptions className="description" title="Détails personnels">
        <Descriptions.Item label="Nom">{user.nom}</Descriptions.Item>
        <Descriptions.Item label="Adresse e-mail">
          {user.adresseEmail}
        </Descriptions.Item>
        <Descriptions.Item label="Numéro de téléphone">
          {user.numeroTelephone}
        </Descriptions.Item>
        <Descriptions.Item label="Adresse">{user.adresse}</Descriptions.Item>
        <Descriptions.Item label="Linkedin">{user.linkedin} </Descriptions.Item>
      </Descriptions>

      <div className="center">
        <h1>CV Zekhnine AYOUB</h1>
      </div>
      <div className="center">
        <h2>
          {" "}
          Cliquez sur le button pour téléchrager Mon CV en quelques minutes
        </h2>
      </div>
      <div className="center-image download">
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
        >
          Download
        </Button>
      </div>
      <div className="center-image">
        <Image width={400} src={CvImage} />
      </div>
    </div>
  );
};

export default Description;