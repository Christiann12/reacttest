import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(data) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button variant="primary" onClick={handleShow} className="block mt-3 mx-auto px-5 py-2 text-sm text-white font-semibold rounded-md border border-purple-200 bg-purple-700 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add Employee</button>   
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        id="editModal"
                        className="w-full max-w-sm"
                        onSubmit={(e) => {
                            e.preventDefault();
                            data.newEmployee(name, role, img);
                            setName("");
                            setRole("");
                            setImg("");
                            handleClose();
                           
                        }}
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                                Full Name
                            </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={name}
                                    placeholder='John Doe'
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="role">
                                    Role
                                </label>
                            </div>
                            <div
                                className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="role"
                                    type="text"
                                    value={role}
                                    placeholder='Intern'
                                    onChange={(e) => {setRole(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="img">
                                    Image URL
                                </label>
                            </div>
                            <div
                                className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="img"
                                    type="text"
                                    value={img}
                                    placeholder='www.google.com'
                                    onChange={(e) => {setImg(e.target.value)}}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-500  hover:bg-slate-700 text-white py-2 px-4 rounded"
                        onClick={handleClose}>
                        Close
                    </button>
                    <button
                        className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded" form="editModal">
                        Add
                    </button>
                </Modal.Footer>
            </Modal> 
        </>
    );
}

export default AddEmployee;