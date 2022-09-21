import React, {useState} from 'react'
import { ContentContainer, ContentHeader, Back, ContentTitle, Img, ContentDescWrapper, ContentSubTitle, ContentDescription, Main, SearchBox, SearchInput, InfoWrapper, Location, Temp, WeatherType } from '../ContentElements'
import axios from 'axios'

const WeatherContent = ({
    contentTitle, img, contentDesc, contentSubtitle
}) => {


  const weatherApi = {
      key: "b0de541c0a73b396187da83bf4a56e33",
      baseUrl: "https://api.openweathermap.org/data/2.5/"
  };
  const [query, setQuery] = useState('');
  const fetchUrl = `${weatherApi.baseUrl}weather?q=${query}&units=metric&APPID=${weatherApi.key}`;
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);


  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(fetchUrl)
      .then(response => {
        setWeather(response.data.weather[0].main);
        setCountry(response.data.sys.country);
        setCity(response.data.name);
        setTemp(response.data.main.temp);
    })
    }
  }

  return (
    <div>
        <ContentHeader>
            <ContentContainer>
                <Back href='/'>Back</Back>
                <ContentTitle>{contentTitle}</ContentTitle>
                <Img src={img}/>
            </ContentContainer>
        </ContentHeader>

        <ContentDescWrapper>
           <ContentSubTitle>{contentSubtitle}</ContentSubTitle>
           <ContentDescription>{contentDesc}</ContentDescription>
        </ContentDescWrapper>

        <Main>
          <SearchBox>
            <SearchInput 
            placeholder='Search City Here'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
              <InfoWrapper>
            <Location>{city} {country}</Location>
          </InfoWrapper>

          <InfoWrapper>
            <Temp>{temp}</Temp>
            <WeatherType>{weather}</WeatherType>
          </InfoWrapper>
          </SearchBox>
       
        </Main>
    </div>
  )
}

export default WeatherContent