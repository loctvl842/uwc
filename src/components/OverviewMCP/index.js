const Index = ({ item }) => {
    return (
        <>
            <div class="w-full aspect-57/34 flex border ">
                <div class="flex-none w-9/19">
                    <img class="w-full h-full" src={item.Image} />
                </div>
                <div class="flex-none w-10/19 flex align-middle">
                    <div class=" w-4/5 m-auto text-justify font-sans">
                        <p class="font-semibold">ID: {item.Id}</p>
                        <div class="h-4"></div>
                        <p class="font-semibold">Name: {item.Name}</p>
                        <div class="h-4"></div>
                        <p class="font-semibold">Address: {item.Address}</p>
                        <div class="h-4"></div>
                        <p class="font-medium text-gray-400">{item.Des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;