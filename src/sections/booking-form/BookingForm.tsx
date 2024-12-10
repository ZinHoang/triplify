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
          <span>Where are you going?</span>
          <input type="text" placeholder="place name" defaultValue="" />
        </InputContainer>
        <InputContainer>
          <span>Travel dates</span>
          <input type="date" defaultValue="" />
        </InputContainer>
        <InputContainer>
          <span>Passengers</span>
          <input
            type="number"
            placeholder="number of passengers"
            defaultValue=""
          />
        </InputContainer>
        <Button>Find Now</Button>
      </form>
    </BookingFormWrapper>
  );
};


