import React from 'react'
import Card from './Card'
const Container = () => {
    return (
        <div className="h-full " >
            <div className="flex p-4 space-x-3">
                <Card title="TOTAL" balance={409.0790} icon={0} />
                <Card title="AVAILABLE" balance={300.0790} icon={1} />
                <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} />
                <Card title="DELEGATED" balance={339.0790} icon={3} />
            </div>
            {/* <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                <Middle />
                <RightBar />
            </div> */}
        </div>
    )
}

export default Container
