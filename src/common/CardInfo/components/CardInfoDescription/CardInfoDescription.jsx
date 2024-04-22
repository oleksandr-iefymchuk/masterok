import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import './CardInfoDescription.scss';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonWrapper from '../../../Button/Button';
import { useTabContext } from '../../../../contexts/TabControlContext';

const CardInfoDescription = ({ description, param }) => {
  const { value, setValue } = useTabContext();
  const [markdown, setMarkdown] = useState('');
  const [isExpandedDescription, setIsExpandedDescription] = useState(false);
  const [isExpandedCharacteristics, setIsExpandedCharacteristics] =
    useState(false);

  const toggleExpandDescription = () =>
    setIsExpandedDescription(!isExpandedDescription);

  const toggleExpandCharacteristics = () =>
    setIsExpandedCharacteristics(!isExpandedCharacteristics);

  const handleChangeTab = (event, newValue) => {
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
            padding: '5px',
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
      <tbody>
        {Object.entries(param).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
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
    <div className="cardInfoDescription" id="reviews">
      <ThemeProvider theme={styles}>
        <TabContext value={value}>
          <TabList onChange={handleChangeTab} className="customTabList">
            <Tab label="Опис" value="description" />
            <Tab label="Характеристики" value="characteristics" />
            <Tab label="Відгуки" value="reviews" />
          </TabList>
          <TabPanel value="description" className="description">
            <div
              className={
                isExpandedDescription ? 'contentExpanded' : 'contentCollapsed'
              }
            >
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            {markdown.split('\n').length > 10 && (
              <ButtonWrapper
                buttonClassName="expandBtn"
                icon={isExpandedDescription ? 'collapse' : 'expand'}
                onClick={toggleExpandDescription}
                buttonText={
                  isExpandedDescription ? 'Згорнути' : 'Показати повністю'
                }
              />
            )}
          </TabPanel>
          <TabPanel value="characteristics" className="characteristics">
            <div
              className={
                isExpandedCharacteristics
                  ? 'contentExpanded'
                  : 'contentCollapsed'
              }
            >
              {renderCharacteristics()}
            </div>
            {Object.keys(param).length > 6 && (
              <ButtonWrapper
                buttonClassName="expandBtn"
                icon={isExpandedCharacteristics ? 'collapse' : 'expand'}
                onClick={toggleExpandCharacteristics}
                buttonText={
                  isExpandedCharacteristics ? 'Згорнути' : 'Показати повністю'
                }
              />
            )}
          </TabPanel>
          <TabPanel value="reviews">Відгуки</TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
};

CardInfoDescription.propTypes = {
  description: PropTypes.string,
  param: PropTypes.object,
};

export default CardInfoDescription;
