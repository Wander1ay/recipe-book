import {Component} from "react";
import {HeaderDesktop} from "@tui-react/header";
import {ButtonDesktop} from "@tui-react/button";

export default class Header extends Component {
    render() {
        return (
            <HeaderDesktop>
                <HeaderDesktop.Wrapper>
                    <HeaderDesktop.Content>
                        <HeaderDesktop.Caption>Вкусно. Просто. Твоё.</HeaderDesktop.Caption>
                        <HeaderDesktop.Title>RecipeBook — Кулинарный помощник</HeaderDesktop.Title>
                        <HeaderDesktop.Subtitle>Лучшие рецепты для каждого дня</HeaderDesktop.Subtitle>
                    </HeaderDesktop.Content>
                    <HeaderDesktop.Accessories>
                        <ButtonDesktop size="l">Поиск рецепта</ButtonDesktop>
                    </HeaderDesktop.Accessories>
                </HeaderDesktop.Wrapper>
                <HeaderDesktop.Description>
                    Открывай для себя простые и проверенные рецепты, добавляй свои любимые блюда и делись вдохновением с другими. Готовь легко, наслаждайся вкусом!
                </HeaderDesktop.Description>
            </HeaderDesktop>
        )
    }
}