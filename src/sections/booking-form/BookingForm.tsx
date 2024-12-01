import React from 'react';
import { Button } from '../../styles/sharedStyledComponents';
import { BookingFormWrapper, InputContainer } from './BookingForm.styles';

export const BookingForm = () => {
  return (
    <BookingFormWrapper
      data-aos="zoom-in"
      data-aos-delay="150"
      data-aos-duration="1500"
    >
      <form>
        <InputContainer>
          <span>where to?</span>
          <input type="text" placeholder="place name" defaultValue="" />
        </InputContainer>
        <InputContainer>
          <span>when?</span>
          <input type="date" defaultValue="" />
        </InputContainer>
        <InputContainer>
          <span>how many?</span>
          <input
            type="number"
            placeholder="number of travellers"
            defaultValue=""
          />
        </InputContainer>
        <Button>Find Now</Button>
      </form>
    </BookingFormWrapper>
  );
};


