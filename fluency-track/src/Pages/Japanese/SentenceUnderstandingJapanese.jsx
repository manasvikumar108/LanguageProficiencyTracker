import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingJapanese = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="/japaneseSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingJapanese