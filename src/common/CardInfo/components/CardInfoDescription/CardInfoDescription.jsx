import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import './CardInfoDescription.scss';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CardInfoDescription = ({ description, param }) => {
  const [value, setValue] = useState('description');
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            width: 'auto',
            fontSize: '16px',
            borderBottom: '3px solid #fff',
            marginRight: '5px',
            '&:hover': {
              background: 'transparent',
              borderBottom: '3px solid #008ec8',
            },
          },
        },
      },
    },
  });

  const renderCharacteristics = () => (
    <table>
      {Object.entries(param).map(([key, value]) => (
        <tr key={key}>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      ))}
    </table>
  );

  const isLocalDevelopment =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';
  const markdownPath = isLocalDevelopment ? '/public/markdown/' : '/markdown/';

  useEffect(() => {
    fetch(`${markdownPath}${description}`)
      .then((res) => res.text())
      .then((markdown) => {
        setMarkdown(markdown);
      });
  }, [description, markdownPath]);

  return (
    <div className="cardInfoDescription">
      <ThemeProvider theme={styles}>
        <TabContext value={value}>
          <TabList onChange={handleChange} className="customTabList">
            <Tab label="Опис" value="description" />
            <Tab label="Характеристики" value="characteristics" />
            <Tab label="Відгуки" value="reviews" />
          </TabList>
          <TabPanel value="description" className="description">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </TabPanel>
          <TabPanel value="characteristics">{renderCharacteristics()}</TabPanel>
          <TabPanel value="reviews">Відгуки</TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
};

export default CardInfoDescription;
