import React from 'react'
import BookList from '../components/BookList'
import { Row, Col } from 'react-bootstrap'


function ProfilePage() {


    return (
        <div className='container'>

            <Row>
                <Col>
            <h1>Welcome to your profile</h1>
            <h1>Status: Patron</h1>
            <h2>Checked Books</h2>
            <h2>Returned Books</h2>
            <h2>Donated Books</h2>
            <h2>Book Wishlist</h2>
            <h2>Account Settings</h2>
            <h2>Help</h2>
                </Col>
            <Col>
            <BookList />
            </Col>
            </Row>
        </div>
    )
}

export default ProfilePage
