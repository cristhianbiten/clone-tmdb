import { BotaoRoxo, Card, Imagem, ImagemNota, ImagemPoster, Info, Overview, SairModal } from './style';
import Modal from 'react-modal';
import { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa'

Modal.setAppElement('#root')

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenModal() {
        setModalIsOpen(true)
    }

    function handleCloseModal() {
        setModalIsOpen(false)
    }

    const styleModal = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50% )',
            backgroundColor: '#101010',
            borderRadius: '25px',
            width: '70%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
        }
    }

    return <>
        <Card onClick={handleOpenModal}>
            <Imagem>
                <ImagemNota average={movie.vote_average}>
                    {movie.vote_average}
                </ImagemNota>
                <img src={imageUrl + movie.poster_path} alt={movie.title} />
            </Imagem>
            <h4>{movie.title} ({movie.release_date})</h4>
        </Card>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={styleModal}
        >
            <SairModal onClick={handleCloseModal}>
                <FaWindowClose />
            </SairModal>
            <ImagemPoster src={imageUrl + movie.poster_path} alt={movie.title} />
            <div>
                <BotaoRoxo>
                    <BsPlay /> Assistir
                </BotaoRoxo>
                <Info>
                    <p>{movie.release_date}</p>
                </Info>
                <Overview>{movie.overview}</Overview>
            </div>
        </Modal>
    </>
}

export default MovieCard;
