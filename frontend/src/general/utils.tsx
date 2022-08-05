import angular from '../components/Images/image-138@3x.png';
import react from '../components/Images/image-140@3x.png';
import vue from '../components/Images/image-141@3x.png';

export const menuOptions = [
    {name: 'Angular', img: angular, class: 'Angular', url: 'angular'},
    {name: 'React', img: react, class: 'Reacts', url: 'react'},
    {name: 'Vue', img: vue, class: 'Vuejs', url: 'vuejs'}
];

export const formatDate = (date: Date) => {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours()
    };
};

export const url = (angular: string, page: number) => {
    return `https://hn.algolia.com/api/v1/search_by_date?query=${angular}&page=${page.toString()}`;
};