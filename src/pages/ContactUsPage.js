import CONTACT from "../components/CONTACT";

const ContactUsPage = () => {
    return (
        <>
            <CONTACT />
            <div>
                <iframe
                    title="This is a Our Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3634.4556959108045!2d54.483929614993095!3d24.36544608428973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIxJzU1LjYiTiA1NMKwMjknMTAuMCJF!5e0!3m2!1sen!2s!4v1678989907163!5m2!1sen!2s"
                    width="100%"
                    height="550"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </>
    )
}
export default ContactUsPage;