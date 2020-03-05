import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return (
        <InstagramEmbed
            url='https://www.instagram.com/p/B5h2UlfBMQS/'
            maxWidth={100}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
        />
    )
}




export default Instagram
