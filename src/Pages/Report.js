import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const Report = () =>
{
    const [tasks, setTasks] = useState([]);

    useEffect(() =>
    {
        const q = query(collection(db, 'stocks'), orderBy('created', 'desc'));
        onSnapshot(q, (querySnapshot) =>
        {
            setTasks(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);

    const generateReport = () =>
    {
        const ReportDocument = () => (
            <Document>
                <Page>
                    <Text>Report Title</Text>
                    {tasks.map((product) => (
                        <Text key={product.id}>
                            {product.data.name} - ${product.data.price}
                        </Text>
                    ))}
                </Page>
            </Document>
        );

        return <ReportDocument />;
    };

    return (
        <div className="w-full h-full py-[8rem] px-5">
            <div className="w-full h-full flex flex-wrap gap-5">
                {tasks.map((product) => (
                    <div
                        key={product.id}
                        className="w-[15rem] h-[15rem]  border-2 border-light-blue p-5 rounded shadow flex justify-between flex-col relative"
                    >
                        <img
                            src={product.data.img}
                            alt="img"
                            className="w-full h-full absolute top-0 left-0 bottom-0 right-0 object-cover z-[50]"
                        />
                        <div className="flex justify-between z-[100] p-1 bg-light-gray text-white rounded">
                            <h1 className="font-open font-lg">{product.data.name}</h1>
                            <p className="font-popins text-[1.2rem]">
                                ${product.data.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='btn bg-blue'>
                <PDFDownloadLink
                    document={generateReport()}
                    fileName="StockReport.pdf"
                    className='btn'
                >
                    {({ loading }) =>
                        loading ? 'Generating report...' : 'Download Report'
                    }
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default Report;
