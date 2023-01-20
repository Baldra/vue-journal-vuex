
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //123456789
            date: new Date().toDateString(), //sat 23, julio
            text: 'Ipsum ullamco qui occaecat reprehenderit est fugiat aute.',
            picture: null // https:// 
        },
        {
            id: new Date().getTime() + 1000, //123456789
            date: new Date().toDateString(), //sat 23, julio
            text: 'Duis sint anim quis dolore veniam ullamco voluptate anim.',
            picture: null // https:// 
        },
        {
            id: new Date().getTime() + 3000, //123456789
            date: new Date().toDateString(), //sat 23, julio
            text: 'Aliquip sit velit ea pariatur nisi cupidatat proident.',
            picture: null // https:// 
        }
    ]
})