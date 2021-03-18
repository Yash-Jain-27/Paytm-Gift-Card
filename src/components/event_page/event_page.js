import React, { useState } from 'react';
import useToken from '../../utils/token';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faGooglePay } from '@fortawesome/free-brands-svg-icons'
import { faWindowClose, faTruck } from '@fortawesome/free-solid-svg-icons'
import './event_page.css';

export default function EventPage() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const { token, setToken } = useToken();

    function handleGiftCardButton() {
        if (mobileNumber) {
            setToken(mobileNumber)
        }
    }

    function checkNumberIsValid() {
        const mobileRegex = /^([0-9]{9})$/
        return mobileRegex.test(mobileNumber)
    }

    function handleInputChange(event) {
        setMobileNumber(event.target.value)
        setIsValidNumber(checkNumberIsValid())
    }

    function renderInputDiv() {
        return <table className="bodyDiv">
            <tbody>
                <tr>
                    <td colSpan="2">
                        <p>
                            You have WON Paytm Gift Card of Rs 200 for <strong>placing the order on man matters</strong>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input
                            type="number"
                            className="mobileInput"
                            placeholder="Enter Mobile Number"
                            onChange={handleInputChange}
                            value={mobileNumber}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button
                            type="button"
                            className="giftButton"
                            onClick={handleGiftCardButton}
                            disabled={!isValidNumber}>
                            Wow! Get my Paytm Gift Card    &gt;
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    }

    function renderThankYouDiv() {
        return <table className="thankyYouTable">
            <tbody>
                <tr>
                    <td colSpan="2"><strong>Where will I get the gift card</strong></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="green" icon={faWhatsapp} size="2x" /></td>
                    <td>
                        You will receive it at whatsApp/SMS on your mobile.
                    </td>
                </tr>

                <tr>
                    <td colSpan="2"><strong>When I will receive the gift card</strong><br /></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="light-brown" icon={faTruck} size="2x" /></td>
                    <td>
                        Within 48 hours, when your man matters order is delieverd.
                    </td>
                </tr>

                <tr>
                    <td colSpan="2"><strong>What if I cancel the order</strong><br /></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="red" icon={faWindowClose} size="2x" /></td>
                    <td>
                        The voucher will not delieverd if you cancel the order.
                    </td>
                </tr>

            </tbody>
        </table>
    }

    return (
        <>
            <div className="headingDiv">
                <h1>Man Matters</h1>
                <h2>Congratulations</h2>

                <div className="cardDiv">
                    <h3><FontAwesomeIcon color="blue" icon={faGooglePay} size="2x" /></h3>
                    <h1>Gift Card Rs 200</h1>
                </div>
            </div>
            {token ? renderThankYouDiv() : renderInputDiv()}
        </>
    );
}